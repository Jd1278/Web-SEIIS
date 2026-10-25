import { site } from '@/config/site'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="space-y-6">
        <p className="text-sm font-medium uppercase tracking-widest text-purple-700">
          {site.institution} · {site.dependency}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {site.name}
        </h1>
        <p className="text-xl text-gray-600">{site.longName}</p>
        <p className="max-w-3xl leading-relaxed text-gray-700">
          Comunidad de aprendizaje que integra docentes y estudiantes para desarrollar
          competencias investigativas en el marco del Grupo de Investigación {site.researchGroup},
          con énfasis en software empresarial, arquitectura y diseño, IoT, realidad aumentada
          y tecnologías emergentes.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/lineas"
            className="rounded-md bg-purple-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-purple-800"
          >
            Ver líneas de investigación
          </Link>
          <Link
            href="/unete"
            className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50"
          >
            Únete al semillero
          </Link>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900">Líneas de investigación</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            'Arquitectura y Diseño de Software',
            'Internet de las Cosas — IoT',
            'Realidad Aumentada',
            'Tecnologías Emergentes',
          ].map((l) => (
            <li key={l} className="rounded-lg border border-gray-200 p-4 text-gray-800">
              {l}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900">Recursos</h2>
        <p className="mt-2 text-gray-700">
          Producción académica y actas del semillero en el{' '}
          <a
            href={site.riUts}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 underline"
          >
            Repositorio Institucional RI-UTS
          </a>
          .
        </p>
      </section>
    </main>
  )
}