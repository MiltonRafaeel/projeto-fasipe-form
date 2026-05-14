# 📝 Formulário de Registro - Evento Fasipe

Este é um projeto full-stack desenvolvido para realizar o cadastro de participantes em eventos. O sistema conta com validações robustas em ambas as pontas (Frontend e Backend), garantindo que apenas cursos válidos sejam registrados no banco de dados.

---

## 🚀 Tecnologias Utilizadas

### **Frontend**
- **React + Vite**: Base do projeto.
- **TypeScript**: Tipagem estática para maior segurança no código.
- **CSS3**: Estilização personalizada com tema Dark/Green.
- **Vercel**: Hospedagem e Deploy contínuo.

### **Backend**
- **Java 21 + Spring Boot 3**: Framework principal.
- **Spring Data JPA**: Abstração da camada de persistência.
- **Bean Validation**: Validação de dados de entrada.
- **PostgreSQL**: Banco de dados relacional.
- **Railway**: Hospedagem da API e do Banco de Dados.

---

## 🛠️ Funcionalidades e Regras de Negócio

- **Validação de Curso:** O usuário só pode enviar o formulário se selecionar um curso válido da lista oficial (ou a opção "Nenhum"). 
- **Tratamento de Erros Profissional:** Caso ocorra um erro de validação no servidor (ex: nome muito curto), o sistema retorna uma mensagem detalhada formatada pelo `ControllerExceptionHandler`.
- **Registro de Data Automático:** O backend captura o exato momento da inscrição utilizando `Instant.now()`.
- **Interface Responsiva:** Design otimizado para dispositivos móveis, facilitando o uso via QR Code no local do evento.
- **Segurança:** Implementação de CORS para permitir comunicações apenas de origens autorizadas.

---

## 📂 Estrutura do Projeto

### **Frontend**
- `src/components/FieldsForm`: Componente principal do formulário com lógica de validação `onBlur` e `handleSubmit`.
- `src/services/registerService`: Integração com a API utilizando `fetch` e tratamento de erros dinâmico.

### **Backend**
- `RegisterController`: Endpoint principal `POST /registers`.
- `RegisterDTO`: Objeto de transferência de dados com anotações de validação (`@NotBlank`, `@Size`, `@ValidCourse`).
- `CourseValidator`: Validador customizado que verifica se o curso enviado pertence à lista permitida.

---

## 📋 Lista Oficial de Cursos
- Nenhum
- Fisioterapia
- Direito
- Análise e Desenvolvimento de Sistemas
- Estética
- Farmácia
- Biomedicina
- Contabilidade
- Ciência da Computação
- Engenharia da Computação

---

## ⚙️ Configuração de Ambiente

### **Variáveis de Ambiente (Frontend - Vercel)**
| Variável | Descrição |
| :--- | :--- |
| `VITE_API_URL` | URL da API hospedada no Railway |

### **Variáveis de Ambiente (Backend - Railway)**
| Variável | Descrição |
| :--- | :--- |
| `SPRING_DATASOURCE_URL` | URL de conexão do Postgres |
| `SPRING_DATASOURCE_USERNAME` | Usuário do banco |
| `SPRING_DATASOURCE_PASSWORD` | Senha do banco |
| `SPRING_JPA_HIBERNATE_DDL_AUTO` | Definir como `update` no primeiro run e `none` após criar a tabela |

---

## 📡 Endpoints da API

### **Criar Registro**
`POST /registers`

**Payload:**
```json
{
  "name": "Nome do Participante",
  "companion": 2,
  "course": "Direito"
}
