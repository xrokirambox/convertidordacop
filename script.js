document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('conversorForm');
  const resultadoDiv = document.getElementById('resultado');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const valorEnDolar = parseFloat(document.getElementById('valorDolar').value);
    const cotizacionDelDolar = 4000; // Cotización del dólar a pesos colombianos.

    if (isNaN(valorEnDolar)) {
      resultadoDiv.textContent = 'Por favor, ingrese un valor válido.';
      return;
    }

    const valorEnPesosColombianos = (valorEnDolar * cotizacionDelDolar).toFixed(2);
    resultadoDiv.textContent = `El valor en pesos colombianos es: $${valorEnPesosColombianos}`;
  });
});
