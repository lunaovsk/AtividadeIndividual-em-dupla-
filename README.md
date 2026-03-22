``` MERMAID
graph LR
    PROFESSOR -- "N" --> DISCIPLINA

    ALUNO -- "1" --> PERFIL

    DISCIPLINA -- "N" --> TAREFA
    TAREFA --"N" --> DISCIPLINA
    
    TAREFA --"1" --> ALUNO
    
    TURMA --"N" --> ALUNO
    TURMA --"1" --> PROFESSOR
```

``` MERMAID
erDiagram

    PROFESSOR }o--o{ DISCIPLINA : leciona

    ALUNO ||--|| PERFIL : possui

    DISCIPLINA ||--o{ TAREFA : contem
    TAREFA }o--o{ DISCIPLINA : relacionada

    ALUNO ||--o{ TAREFA : realiza

    TURMA ||--o{ ALUNO : possui
    TURMA ||--|| PROFESSOR : responsavel
```