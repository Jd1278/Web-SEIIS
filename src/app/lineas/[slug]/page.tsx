import ComingSoon from '@/components/ComingSoon'
export default function Page({ params }: { params: { slug: string } }) {
  return <ComingSoon title={`Línea: ${params.slug}`} />
}