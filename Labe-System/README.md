DOCUMENTAÇÃO DA API: https://documenter.getpostman.com/view/20352466/UzBqq6Ji


LabenuSystem

O projeto LabenuSystem foi ispirado em uma instituição de Ensino representando o básico do Backend da organização Labenu. 
Ele foi dividivo em: 

1. Estudantes
Neste módulo cada estudante contém alguns dados que o identifica: id, nome, e-mail, data de nascimento e hobbies. Foi possível fazer os endpoints de: 
Criar estudante, Buscar estudante através do nome; Mudar estudante de turma.

2. Docente 
Representa os professores da instituição, sendo que esses professores devem conter: id, nome, email, data de nascimento e suas especialidades: React, Redux,
 CSS, Testes, Typescript, Programação Orientada a Objetos e Backend. Foi possível fazer os endpoints de:Criar Docente, Buscar todas as pessoas docentes, 
mudar docente de turma.

3. Turma 
As turmas são formadas por suas respectivas características: id, nome, data de início, data de término, lista de professores responsáveis, 
uma lista de alunos e módulo atual em que a turma está. 
Foi possível fazer os endpoints de: Criar turma, Buscar turmas ativas e mudar turma de módulo. 
Utilizamos a plataforma do Postman para bater os endpoints e buscar criar ou visualizar as informações que contemplava nosso código. 

Criamos nossas 07 tabelas todas no MySql que nos fornece todas as informações bases para projetar nosso LabenuSystem: 
Tabela de Estudante,
Estudante_Hobby,
Hobby,
Turma,
Docente, 
Docente_Especialidade e
Especialidade

Participantes deste projeto: Alessandra Sandeski Marmiroli, Alex Maiolino Kalawatis e Maria Eduarda dos Reis Lopes. 
