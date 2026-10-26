import Link from 'next/link'

export default function ComingSoon({ title }: { title: string }) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-center">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      <p className="mt-4 text-gray-600">
        Esta sección está en construcción. El contenido se publicará próximamente.
      </p>
      <Link href="/" className="mt-6 inline-block text-purple-700 underline">
        Volver al inicio
      </Link>
    </main>
  )
}