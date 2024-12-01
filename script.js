// Selecionando o formulário e a tabela
const form = document.getElementById('contact-form');
const tableBody = document.querySelector('#contact-table tbody');

// Função para adicionar contato na tabela
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Previne o envio do formulário

    // Obtém os valores dos campos do formulário
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Verifica se os campos não estão vazios
    if (name && phone) {
        // Cria uma nova linha na tabela
        const row = document.createElement('tr');

        // Cria as células para Nome e Telefone
        const nameCell = document.createElement('td');
        const phoneCell = document.createElement('td');

        // Adiciona os valores às células
        nameCell.textContent = name;
        phoneCell.textContent = phone;

        // Adiciona as células à linha
        row.appendChild(nameCell);
        row.appendChild(phoneCell);

        // Adiciona a linha à tabela
        tableBody.appendChild(row);

        // Limpa os campos do formulário
        form.reset();
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});
