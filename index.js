// Base a ser utilizada
const alunosDaEscola = [
    {
        codigo: 1,
        nome: "Henrique",
        notas: [],
        cursos: [],
        faltas: 5
    },
    {
        codigo: 2,
        nome: "Edson",
        notas: [],
        cursos: [],
        faltas: 2
    },
    {
        codigo: 3,
        nome: "Bruno",
        notas: [10, 9.8, 9.6],
        cursos: [],
        faltas: 0
    },
    {
        codigo: 4,
        nome: "Guilherme",
        notas: [10, 9.8, 9.6],
        cursos: [{ nomeDoCurso: "Full Stack", dataMatricula: new Date }],
        faltas: 0
    },
    {
        codigo: 5,
        nome: "Carlos",
        notas: [],
        cursos: [],
        faltas: 0
    },
    {
        codigo: 6,
        nome: "Lucca",
        notas: [10, 9.8, 9.6],
        cursos: [{ nomeDoCurso: "UX", dataMatricula: new Date }],
        faltas: 0
    }];


// implementação

function adicionarAluno(addnome){
    let novoAluno = {
        codigo: alunosDaEscola.length+1,
        nome: addnome,
        notas: [],
        cursos: [],
        faltas: 0,
    };
    alunosDaEscola.push(novoAluno);
    console.log("Nome do novo aluno cadastrado: "+addnome);
    return "Aluno adicionado com sucesso!";

};
console.log("[Função adicionarAluno]");
console.log(adicionarAluno("Ligiane"));
console.log("____________________________________");


function listarAlunos() {
    
    console.log("[Função listarAlunos] Lista de Alunos Cadastrados:");
    console.log("                ");
    console.log(" ref.  " + "Nome");
    
    for (let i = 0; i < alunosDaEscola.length; i++) {        
        console.log(
            " " + [i] + "     " + alunosDaEscola[i].nome+"  ["
            +"Cursos = "+(alunosDaEscola[i].cursos.length?alunosDaEscola[i].cursos[0].nomeDoCurso+" - Data da Matrícula: "+
            alunosDaEscola[i].cursos[0].dataMatricula.toLocaleDateString()+     "     |  ": "ND consta |  ")
            +"Notas = "+alunosDaEscola[i].notas +"  |" 
            +"Faltas = "+alunosDaEscola[i].faltas+"  ]" );
        }        
    };    
    listarAlunos();
    
    console.log("____________________________________");


function buscarAluno(nomeAluno){
    
    let buscar = alunosDaEscola.filter(function(alunoCadastrado){
        return alunoCadastrado.nome == nomeAluno;
    });

    if(buscar.length > 0){
        return buscar[0];        
    } else{
        console.log("Aluno não localizado");
        return [];
    }
}
console.log("[Função buscarAluno] Pesquisando Dados cadastrais do Aluno(a): ");
console.log(buscarAluno("Ligiane"));
console.log("____________________________________");

    
    function matricularAluno(aluno, addCurso){
        
        var alunoObj = buscarAluno(aluno);
         

        if(alunoObj){            
            alunoObj.cursos.push({nomeDoCurso: addCurso, dataMatricula: new Date});
            console.log("Aluno: "+aluno + ", matriculado ao curso: "+addCurso);
            return "Aluno adicionado ao curso com sucesso!"; 

        }else{
            
            alunosDaEscola.push(    {
                codigo: alunosDaEscola.length+1,
                nome: aluno,
                notas: [],
                cursos: [{ nomeDoCurso: addCurso, dataMatricula: new Date }],
                faltas: 0
            });
        }            
   };
   console.log("[Função matricularAluno]");
   console.log(matricularAluno("Ligiane", "Design"));
   console.log("____________________________________");
   
   
   function aplicarFalta(aluno, faltas){
    var alunoObj = buscarAluno(aluno);
    

    if(alunoObj){            
        alunoObj.faltas+=faltas;
        console.log("Falta aplicada: "+faltas);
        return "Falta adicionada com sucesso!"; 

    }else{
        return "Aluno não cadastrado!";
        }     
   }

console.log("[Função aplicarFalta]");
console.log(aplicarFalta("Ligiane", 1));
console.log(aplicarFalta("Ligiane", 1));
console.log("____________________________________");


function aplicarNota(aluno, nota){
    var alunoObj = buscarAluno(aluno);

    if(alunoObj){            
        alunoObj.notas.push(nota);
        console.log("Nota aplicada: "+nota);
        return "Nota adicionada com sucesso!"; 
             

    }else{
        return "Aluno não cadastrado!";
        }
    
}

console.log("[Função aplicarNota]");
console.log(aplicarNota("Ligiane", 10));
console.log(aplicarNota("Ligiane", 5));
console.log("____________________________________");

function aprovarAluno(aluno){
        var alunoObj = buscarAluno(aluno);

        let somaNotas = 0;
        let mediaNota = 0;

        let arrayNotas= alunoObj.notas.map(function(nota){
            somaNotas = somaNotas + nota;
            console.log("Nota do aluno", nota);
        });

        mediaNota = somaNotas/alunoObj.notas.length;
        console.log("Média do Aluno: " +mediaNota);
        
        if(alunoObj && mediaNota >= 7 && alunoObj.faltas < 3 ){            
            return "Aluno Aprovado!"; 
            
        } else if (alunoObj && mediaNota < 7 || alunoObj.faltas > 3) {
            return "Aluno Reprovado!";
            
        } else {
            return "Aluno não cadastrado!";            
        };     
    }
    console.log("[Função aprovarAluno]");
    console.log(aprovarAluno("Ligiane"));
    console.log("____________________________________");
    
