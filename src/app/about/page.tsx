import { Music, Heart, Mic2 } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-owl-dark to-owl-midnight pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-display text-5xl text-center mb-16 text-owl-accent">About</h1>
        
        {/* Band Story */}
        <section className="mb-20">
          <div className="bg-owl-slate/30 rounded-3xl p-8 md:p-12 border border-owl-water/10">
            <h2 className="font-display text-3xl text-owl-glow mb-6">The Band's Story</h2>
            
            <div className="prose prose-invert prose-lg max-w-none">

              <p className="text-owl-accent/80 leading-relaxed mb-6">
                Owls in Water は、ルールに縛られず音楽を作るという想いから生まれた、4人編成のバンドです。
              </p>
              
              <p className="text-owl-accent/80 leading-relaxed mb-6">
                静かな夜に寄り添う曲もあれば、勢いだけで突き進むような曲もあります。
                考え込むための音楽もあれば、ただ楽しむための音楽もある。私たちは、
                その振れ幅を大切にしています。
              </p>

              <p className="text-owl-accent/80 leading-relaxed mb-6">
                このプロジェクトの名前は、あるイメージから生まれました。
                夜の生き物であるフクロウが、水面に映る自分の姿をふと見る瞬間。
                意味を探すためではなく、ただ気づいて、また前に進むための一瞬。
              </p>

              <p className="text-owl-accent/80 leading-relaxed mb-6">
                Owls in Water の音楽も、そんな距離感で生まれています。
                正直であること。考えすぎないこと。
                その時その時の感情や空気を、そのまま音にすること。
              </p>
              
              <p className="text-owl-accent/80 leading-relaxed">
                集中して聴いてもいいし、口ずさんでもいい。
                何かを感じても、何も考えなくてもいい。
                Owls in Water は、音と空気、そして好奇心のための音楽です。
              </p>
              <div className="border-t border-owl-water/30 my-6"></div>
              <p className="text-owl-accent/80 leading-relaxed mb-6">
                Owls in Water is a four-member band formed around the idea of making music without rules.
              </p>
              
              <p className="text-owl-accent/80 leading-relaxed mb-6">
                Some songs live in the quiet — late nights, passing lights, moments when you're 
                thinking more than talking. Others are loud, messy, or just fun for the sake of it.
                We like that contrast. We don't try to smooth it out.
              </p>

              <p className="text-owl-accent/80 leading-relaxed mb-6">
                Our music moves between moods and moments: reflective, restless, playful, intense. 
                Sometimes a song is about standing still. Sometimes it's about turning the volume up and seeing what happens.
              </p>

              <p className="text-owl-accent/80 leading-relaxed mb-6">
                The name Owls in Water comes from an image we kept coming back to — a night creature 
                catching its reflection, not to analyze it, just to notice it. A pause. A glance. Then moving on.
              </p>

              <p className="text-owl-accent/80 leading-relaxed mb-6">
                That's how we approach music. Make something honest. Don't overthink it. Let it be what it is.
              </p>
              
              <p className="text-owl-accent/80 leading-relaxed">
                Owls in Water is about sound, atmosphere, and curiosity — whether you're listening closely, 
                singing along, or just letting it play.
              </p>
            </div>
          </div>
        </section>
        
        {/* Values/Philosophy */}
        <section className="mb-20">
          <h2 className="font-display text-3xl text-center text-owl-accent mb-12">Our Philosophy</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-owl-slate/20 rounded-2xl p-6 border border-owl-water/10 text-center">
              <div className="w-14 h-14 bg-owl-water/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-7 h-7 text-owl-glow" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Authentic Sound</h3>
              <p className="text-owl-accent/60 text-sm">
                Every note is intentional. We craft music that means something, 
                not just sounds that fill space.
              </p>
            </div>
            
            <div className="bg-owl-slate/20 rounded-2xl p-6 border border-owl-water/10 text-center">
              <div className="w-14 h-14 bg-owl-water/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-owl-glow" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Deep Connection</h3>
              <p className="text-owl-accent/60 text-sm">
                Music is a bridge between souls. We create for the listeners 
                who feel as much as they hear.
              </p>
            </div>
            
            <div className="bg-owl-slate/20 rounded-2xl p-6 border border-owl-water/10 text-center">
              <div className="w-14 h-14 bg-owl-water/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic2 className="w-7 h-7 text-owl-glow" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Living Art</h3>
              <p className="text-owl-accent/60 text-sm">
                Every album is unique. We embrace the moment and let 
                the music breathe differently each time.
              </p>
            </div>
          </div>
        </section>
        
        {/* Commentary/Updates Section */}
        <section>
          <h2 className="font-display text-3xl text-center text-owl-accent mb-12">Latest Notes</h2>
          
          <div className="space-y-6">
            <article className="bg-owl-slate/20 rounded-2xl p-6 border border-owl-water/10">
              <time className="text-owl-water text-sm">January 2026</time>
              <h3 className="text-xl text-white mt-2 mb-3">New Year, New Sounds</h3>
              <p className="text-owl-accent/70">
                スカイラインドライブ（Skyline Drive）がリリースされました。
              </p>
              <br />
              <p className="text-owl-accent/70">
                このアルバムは、夜遅くに少しずつ形になっていった作品です。
                街が時間とともに表情を変えていく中を、最初の灯りから、その先へと進んでいく——
                はっきりした答えというより、ひとつひとつの“瞬間”を集めたような音楽です。
              </p>
              <br />
              <p className="text-owl-accent/70">
                静かな道を走る時間、言い終えなかった会話、
                周りが静かになったときにだけ浮かんでくる考えごと。
                そんな夜の気配を、そのまま音にしました。
              </p>
              <br />
              <p className="text-owl-accent/70">
                それぞれの曲は単独でも聴けますが、
                全体としては一つの流れになるように作っています。
                10曲、ひと続きの夜。
                考えさせる曲もあれば、落ち着かない曲、
                理由はいらず、ただ感じてほしい曲もあります。
              </p>
              <br />
              <p className="text-owl-accent/70">
                いつも聴いてくれて、シェアしてくれて、
                この音楽と時間を過ごしてくれて、本当にありがとう。
                この作品がたどり着いた場所を、私たちは気に入っています。
                そして、ここまで一緒に来てくれたことに感謝しています。
              </p>
              <div className="border-t border-owl-water/30 my-6"></div>
              <p className="text-owl-accent/70">
                Skyline Drive (スカイラインドライブ) is out now.
              </p>
              <br />
              <p className="text-owl-accent/70">
                This album came together late at night, moving through the city 
                hour by hour — from first lights to whatever comes after. 
                It's a collection of moments rather than statements: 
                rides through empty streets, conversations you don't quite finish, 
                thoughts that only show up when things get quiet.
              </p>
              <br />
              <p className="text-owl-accent/70">
                Each track stands on its own, but they were written to be heard 
                as a single arc. Ten songs, one continuous night. Some are reflective, 
                some restless, some simply there to be felt rather than explained.
              </p>
              <br />
              <p className="text-owl-accent/70">
                Thank you to everyone who has been listening, sharing, and spending 
                time with our music. We're proud of where this one landed — 
                and grateful you're here for the ride.
              </p>
              <br />
              <p className="text-owl-accent/70">
                OiW 
              </p>
            </article>
            
            <article className="bg-owl-slate/20 rounded-2xl p-6 border border-owl-water/10">
              <time className="text-owl-water text-sm">December 2025</time>
              <h3 className="text-xl text-white mt-2 mb-3">ありがとう (Thank You)</h3>
              <p className="text-owl-accent/70">
                この一年、私たちの音楽を聴いて、
                誰かに勧めて、つながってくれたすべての人へ——
                本当にありがとう。
              </p>
              <br />
              <p className="text-owl-accent/70">
                あなたたちの存在が、私たちにとってすべてです。
                これからも、夜の途中で出会う瞬間を一緒に。
              </p>
              <div className="border-t border-owl-water/30 my-6"></div>
              <p className="text-owl-accent/70">
                To everyone who listened, shared, and connected with our music 
                this year—thank you. Your support means everything. Here's to 
                more midnight moments together.
              </p>
              <br />
              <p className="text-owl-accent/70">
                OiW 
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  )
}
