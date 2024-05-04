export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className='w-full mt-20 flex justify-center'>
      <div className='w-3/5'>{children}</div>
    </main>
  )
}
