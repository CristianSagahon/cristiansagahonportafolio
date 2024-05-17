function codificarYGenerarPDF() {
    const clave = {
        'A': 'I', 'B': 'C', 'C': 'Ñ', 'D': 'H', 'E': 'O', 'F': 'M', 'G': 'T',
        'H': 'L', 'I': 'B', 'J': 'S', 'K': 'A', 'L': 'R', 'M': 'Q', 'N': 'P',
        'Ñ': 'E', 'O': 'W', 'P': 'J', 'Q': 'F', 'R': 'V', 'S': 'U', 'T': 'K', 'U': 'X',
        'V': 'D', 'W': 'Y', 'X': 'N', 'Y': 'Z', 'Z': 'G', ' ': ' '
    };

    const mensaje = document.getElementById("message").value.toUpperCase();
    let mensajeCodificado = "";

    for (let letra of mensaje) {
        mensajeCodificado += clave[letra] || letra;
    }

    document.getElementById("resultado").textContent = "Mensaje codificado: "+ mensajeCodificado;
    const { jsPDF } = window.jspdf;
    var doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(20, 20, "Mensaje Original: " + mensaje);
    doc.text(20, 40, "Mensaje codificado: " + mensajeCodificado);
    var pdfDataUri = doc.output('datauristring');

    var iframe = document.getElementById('pdfIframe');

    iframe.src = pdfDataUri;
    
}
