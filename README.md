# LSP Config
Configure custom Language Servers for VS Code in `settings.json`

## Example
```json
{
  "lspConfig.servers": [
    {
      "language": "go",
      "cmd": "gopls",
    },
    {
      "language": "zig",
      "cmd": "zls",
    },
    {
      "language": "javascript",
      "cmd": "node",
      "args": "/path/to/custom/language/server.js"
    }
  ]
}
```

## Why?

You might wonder why choose LSP Config when there are already feature-packed Language Server extensions like those for [Go](https://marketplace.visualstudio.com/items?itemName=golang.Go) and [Zig](https://marketplace.visualstudio.com/items?itemName=ziglang.vscode-zig).

Here's the deal: Setting up Language Server Protocol (LSP) in Neovim was a breeze for me. But when I tried to do the same in Visual Studio Code, it turned out to be a real hassle. Imagine needing to create a whole extension just to test my LSP setup! That's when it hit me—I needed a simpler way to check if my LSP worked well in VS Code. And that's exactly why I made this Extension.

## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/pepebecker/vscode-lsp-config/issues).