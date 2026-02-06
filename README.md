# <p align="center"><img src="https://github.com/user-attachments/assets/7b6e4725-5c1e-46b8-8f26-f31ddbaf3780" alt="Animations" width="600" height="600"/></p>
# <p align="center">Animations</p>

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/CircleCI-343434?style=for-the-badge&logo=circleci&logoColor=white" />
</p>

Repositório dedicado ao estudo e implementação de animações avançadas em **React Native**. O projeto foca em performance, fluidez de UI e automação de testes para garantir que as interações funcionem perfeitamente em ambas as plataformas (Android e iOS).

---

## 🛠️ Tecnologias Principais

* **React Native** - Framework para desenvolvimento mobile.
* **TypeScript** - Tipagem estática para maior segurança no desenvolvimento.
* **React Native Reanimated** - Engine para animações de alta performance.
* **Detox** - Framework de testes End-to-End (E2E) para mobile.
* **CircleCI** - Pipeline de integração contínua para automação de builds e testes.

---

## 🚀 Funcionalidades e Experimentos

* **UI Interactions:** Micro-interações em componentes de interface.
* **Gestures:** Manipulação de eventos de toque e gestos complexos.
* **Automated QA:** Cobertura de testes e2e para validar fluxos de animação.
* **CI/CD:** Workflows automatizados para validação de código.

---

## 📂 Estrutura de Pastas

```text
Animations/
 ├── .circleci/           # Configurações de Integração Contínua
 ├── .github/             # Workflows do GitHub Actions
 ├── android/             # Código nativo Android
 ├── ios/                 # Código nativo iOS
 ├── e2e/                 # Testes de ponta a ponta (Detox)
 ├── routes/              # Definições de navegação do App
 ├── src/                 # Código fonte da aplicação
 │    ├── assets/         # Imagens, fontes e arquivos de animação
 │    └── components/     # Componentes animados e reutilizáveis
 ├── App.tsx              # Componente raiz
 ├── index.js             # Entrada do aplicativo
 ├── package.json         # Dependências e scripts de execução
 └── tsconfig.json        # Configurações do TypeScript
```

## 📦 Como Rodar o Projeto

1. **Clone o repositório:**

```Bash
git clone [https://github.com/LeonardodeLima/Animations.git](https://github.com/LeonardodeLima/Animations.git)
```

2. **Instale as dependências:**
```Bash
yarn install
```

3. **Instale os Pods (apenas iOS):**
```Bash
cd ios && pod install && cd ..
```

4. **Execute o projeto:**
```Bash
yarn android # para Android
yarn ios     # para iOS
```

##🧪 Testes

### Para rodar os testes E2E com Detox:
```Bash
yarn detox:build
yarn detox:test
```

Desenvolvido com <3 por [Leonardo de Lima](https://github.com/LeonardodeLima)
