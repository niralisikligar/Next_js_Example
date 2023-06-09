
import Todolist from './Todolist';


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <main className='flex'>
           <div>
            {/* @ts-ignore */}
            <Todolist />
           </div>
           <div className='flex-1'>{children}</div>
        </main>
    )
  }