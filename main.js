<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Oportunidades na sua cidade</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Encontre oportunidades na sua cidade</h1>
    </header>
    <main>
        <form id="cityForm">
            <label for="city">Digite o nome da sua cidade:</label>
            <input type="text" id="city" name="city" required>
            <button type="submit">Buscar</button>
        </form>
        <div id="opportunities">
            <!-- Aqui serão exibidas as oportunidades -->
        </div>
    </main>
    <footer>
        <p>&copy; 2024 Oportunidades na Cidade</p>
    </footer>

    <script>
        document.getElementById('cityForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Evita o comportamento padrão de enviar o formulário

            // Obtém o valor digitado no campo da cidade
            var city = document.getElementById('city').value;

            // Simula a busca de oportunidades com base na cidade digitada
            var opportunities = getOpportunities(city);

            // Exibe as oportunidades na div 'opportunities'
            displayOpportunities(opportunities);
        });

        function getOpportunities(city) {
            // Aqui você pode conectar-se a uma API ou banco de dados para obter as oportunidades reais com base na cidade
            // Por enquanto, vamos apenas retornar algumas oportunidades de exemplo
            return [
                "Vaga de emprego em " + city + ": Desenvolvedor Web",
                "Evento em " + city + ": Feira de Empreendedorismo",
                "Serviço em " + city + ": Limpeza de Jardim",
            ];
        }

        function displayOpportunities(opportunities) {
            var opportunitiesDiv = document.getElementById('opportunities');
            opportunitiesDiv.innerHTML = ''; // Limpa o conteúdo atual

            // Cria uma lista de oportunidades e adiciona ao elemento 'opportunitiesDiv'
            var ul = document.createElement('ul');
            opportunities.forEach(function(opportunity) {
                var li = document.createElement('li');
                li.textContent = opportunity;
                ul.appendChild(li);
            });
            opportunitiesDiv.appendChild(ul);
        }
    </script>
</body>
</html>