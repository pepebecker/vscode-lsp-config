import { ExtensionContext, window, workspace } from 'vscode'

import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind
} from 'vscode-languageclient/node'

let clients: LanguageClient[]

interface ServerConfigEntry {
  language: string
  cmd: string
  args: string
}

export function activate(context: ExtensionContext) {
  const servers: ServerConfigEntry[] = workspace.getConfiguration().get('lspConfig.servers')

  clients = []
  if (servers.length === 0) {
    window.showInformationMessage(`No Language Servers configured`)
    return
  }

  for (const server of servers) {
    const serverOptions: ServerOptions = {
      command: server.cmd,
      args: [server.args],
      transport: TransportKind.stdio,
    }

    const clientOptions: LanguageClientOptions = {
      documentSelector: [{ scheme: 'file', language: server.language }],
    }

    const client = new LanguageClient(
      `lsp-config-${server.language}`,
      `LSP Config (${server.language})`,
      serverOptions,
      clientOptions
    )

    client.start()
    clients.push(client)
    window.showInformationMessage(`LSP Config: Started Language Server for ${server.language}`)
  }

}

export function deactivate(): Thenable<any> | undefined {
  if (!clients.length) return
  return Promise.allSettled(clients.map(c => c.stop()))
}
