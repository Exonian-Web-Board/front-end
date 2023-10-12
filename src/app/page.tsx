import Image from 'next/image'
import PreviewSeniorOfTheWeek from '@/components/PreviewSeniorOfTheWeek'
import PreviewNoDesc from '@/components/PreviewNoDesc'
import PreviewWithDesc from '@/components/PreviewWithDesc'
import PreviewCenter from '@/components/PreviewCenter'

export default function Home() {
  return (
    <div className="flex w-screen h-auto items-center justify-center">
      {/* TODO: Optimize min-h requirement */}
      <main className="flex w-3/4 h-auto min-h-screen">
        <div className="w-full flex flex-col flex-wrap gap-1">
          <hr className="w-full border-neutral-300"/>
          <hr className="w-full border-neutral-300"/>
          <PreviewSeniorOfTheWeek/>
          <PreviewNoDesc/>
          <PreviewWithDesc/>
          <PreviewCenter/>
        </div>
      </main>
    </div>
  )
}