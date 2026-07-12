/**
 * Recebe os dados enviados pelo formulário RSVP do site e
 * escreve uma nova linha na Google Sheet onde este script está anexado.
 *
 * COMO USAR:
 * 1. Cola este ficheiro em Extensões > Apps Script (dentro da tua Sheet)
 * 2. Guarda (ícone da disquete)
 * 3. Deploy > New deployment > tipo "Web app"
 *    - Execute as: Eu (a tua conta)
 *    - Who has access: Anyone
 * 4. Copia o URL que te derem e cola-o em js/script.js na constante GOOGLE_SCRIPT_URL
 */

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var dados = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    dados.nome || "",
    dados.presenca === "sim" ? "Sim" : "Não",
    dados.acompanhantes || "0",
    dados.restricoes || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ resultado: "sucesso" }))
    .setMimeType(ContentService.MimeType.JSON);
}
