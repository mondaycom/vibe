# Context & Documentation for AI-assisted coding

This package contains context and rules for LLM-assisted coding. 

With context, an LLM is more likely to write correct code. Without it, they may write nonsensical JSX or use components in the wrong way. 

The context is bundled as:
- vibe-usage-best-practices.md - General best practices for importing and using Vibe components
- /components - Rules and boilerplate for specific components

Each context file is a markdown file with some YAML front matter. The rules are split into multiple files to prevent LLM confusion. 

## Installation

You can copy the files directly or clone the subdirectory using degit. 
```
npx degit https://github.com/mondaycom/vibe/docs/llm-context
```

Clone into a subdirectory: 
```
npx degit https://github.com/mondaycom/vibe/docs/llm-context .cursor/rules
```

## Usage with Cursor

1. Copy the files into `.cursor/rules` directory (project rules)
2. Add the files to Cursor's context by @mentioning them in the Cursor chat window (recommended). 

[Cursor Project Rules Documentation](https://docs.cursor.com/context/rules#project-rules)

## Usage with Copilot

1. Copy the files into a project-level context folder
2. Attach the relevant file (or all of them) to your query with #mention

[Copilot Chat Context Documentation](https://code.visualstudio.com/docs/copilot/chat/copilot-chat-context)