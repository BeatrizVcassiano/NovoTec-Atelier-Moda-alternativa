//Api de pagamento//

import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { randomUUID } from "node:crypto";

const folder = dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT) || 3001;

// Preços definidos no servidor. Não aceite preços enviados pelo navegador.
const catalog = {
  "vestido-noctis": {
    name: "Vestido Noctis",
    price: 189.90,
    sizes: ["P", "M", "G"]
  },
  "jaqueta-eclipse": {
    name: "Jaqueta Eclipse",
    price: 279.90,
    sizes: ["P", "M", "G"]
  },
  "blusa-obscura": {
    name: "Blusa Obscura",
    price: 119.90,
    sizes: ["P", "M", "G"]
  },
  "vestido-velvet": {
    name: "Vestido Velvet",
    price: 229.90,
    sizes: ["P", "M", "G"]
  },
  "jaqueta-ritual": {
    name: "Jaqueta Ritual",
    price: 259.90,
    sizes: ["P", "M", "G"]
  },
  "blusa-meia-noite": {
    name: "Blusa Meia-Noite",
    price: 139.90,
    sizes: ["P", "M", "G"]
  },
  "coturno-sombra": {
    name: "Coturno Sombra",
    price: 319.90,
    sizes: ["U"]
  },
  "vestido-lunar": {
    name: "Vestido Lunar",
    price: 199.90,
    sizes: ["P", "M", "G"]
  }
};

function sendJson(response, status, data) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });

  response.end(JSON.stringify(data));
}

createServer(async (request, response) => {
  const pathname = new URL(
    request.url,
    `http://${request.headers.host || "localhost"}`
  ).pathname;

  if (pathname === "/api/checkout" && request.method === "POST") {
    if (!process.env.MP_ACCESS_TOKEN) {
      return sendJson(response, 503, {
        error: "Pagamento não configurado. Adicione MP_ACCESS_TOKEN ao servidor."
      });
    }

    try {
      let body = "";

      for await (const chunk of request) {
        body += chunk;

        if (body.length > 16000) {
          return sendJson(response, 413, {
            error: "Pedido muito grande."
          });
        }
      }

      const { items } = JSON.parse(body);

      if (!Array.isArray(items) || !items.length || items.length > 30) {
        return sendJson(response, 400, {
          error: "Carrinho inválido."
        });
      }

      const checkoutItems = items.map(item => {
        const product = catalog[item.id];

        if (
          !product ||
          !product.sizes.includes(item.size) ||
          !Number.isInteger(item.quantity) ||
          item.quantity < 1 ||
          item.quantity > 99
        ) {
          throw new Error("Item inválido");
        }

        return {
          id: item.id,
          title: `${product.name} - ${item.size}`,
          quantity: item.quantity,
          currency_id: "BRL",
          unit_price: product.price
        };
      });

      const mpResponse = await fetch(
        "https://api.mercadopago.com/checkout/preferences",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
            "X-Idempotency-Key": randomUUID()
          },
          body: JSON.stringify({
            items: checkoutItems,
            statement_descriptor: "NOVOTEC ATELIER"
          })
        }
      );

      const preference = await mpResponse.json();

      if (!mpResponse.ok || !preference.init_point) {
        console.error("Falha no Mercado Pago:", mpResponse.status);
        return sendJson(response, 502, {
          error: "Não foi possível iniciar o pagamento."
        });
      }

      return sendJson(response, 200, {
        checkoutUrl: preference.init_point
      });
    } catch (error) {
      if (error instanceof SyntaxError || error.message === "Item inválido") {
        return sendJson(response, 400, {
          error: "Dados do carrinho inválidos."
        });
      }

      console.error("Erro no checkout:", error);

      return sendJson(response, 502, {
        error: "Pagamento temporariamente indisponível."
      });
    }
  }

  const files = {
    "/": ["index.html", "text/html"],
    "/index.html": ["index.html", "text/html"],
    "/style.css": ["style.css", "text/css"],
    "/script.js": ["script.js", "text/javascript"]
  };

  const file = files[pathname];

  if (request.method !== "GET" || !file) {
    return sendJson(response, 404, {
      error: "Página não encontrada."
    });
  }

  try {
    const content = await readFile(join(folder, file[0]));

    response.writeHead(200, {
      "Content-Type": `${file[1]}; charset=utf-8`
    });

    response.end(content);
  } catch {
    sendJson(response, 404, {
      error: "Arquivo não encontrado."
    });
  }
}).listen(port, () => {
  console.log(`Loja disponível em http://localhost:${port}`);
});
