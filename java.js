let resp = window.document.getElementById('container flex flex-warp');

// lista de livros disponíveis na biblioteca
const biblioteca = [
    "Adimiravel Mundo Novo",
    "Harry Potter e a Pedra Filosofal",
    "Harry Potter e a Câmara Secreta",
    "Harry Potter e o Prisioneiro de Azkaban",
    "Harry Potter e a Ordem da Fênix",
    "Harry Potter e o Enigima do Principe",
    "O Cortiço",
    "Dom Casmuro",
    "Memórias Póstumas de Brás Cubas",
    "Os Sertões"
];

// Função para buscar um livro na biblioteca
function busca(){
    livro = prompt("qual livro voce busca?")
    if (biblioteca.includes(livro)){
        window.alert(`Livro encontrado`);
    } else{
        window.alert(`Livro não encontrado`);
    }
}

livros = 0;
    // Função para reservar um livro
    function reservarLivro(){
        if (livros < 3){
        window.alert(`Reserva realizada com sucesso`);
        livros = livros + 1;
        } else{ 
        window.alert(`Não é possivel realizar essa reserva`);
        }

    }

   