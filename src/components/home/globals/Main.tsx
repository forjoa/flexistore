export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className='w-full mt-20 flex justify-center'>
      <div className='w-[80%] md:w-[70%]'>{children}</div>
    </main>
  )
}
