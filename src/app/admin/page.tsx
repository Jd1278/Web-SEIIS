export default function AdminPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900">Editor de contenido (CMS)</h1>
      <p className="mt-4 text-gray-700">
        Esta sección se habilitará con Decap CMS en el hito M3. Mientras tanto, el
        contenido se gestiona directamente en la carpeta <code>content/</code> mediante
        pull requests.
      </p>
    </main>
  )
}