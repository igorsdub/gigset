import { Song, Event, AppState } from '../types';

export const PRESET_LIBRARY: Song[] = [
  {
    id: 's1',
    title: 'Stand By Me',
    artist: 'Ben E. King',
    defaultKey: 'A',
    tempo: 118,
    timeSignature: '4/4',
    content: `{title: Stand By Me}
{artist: Ben E. King}
{key: A}

{section: Intro / Form}
| [A] / / / | [A] / / / | [F#m] / / / | [F#m] / / / |
| [D] / / / | [E] / / / | [A] / / / | [A] / / / |

{section: Verse 1}
| When the [A]night has come | and the [F#m]land is dark |
| And the [D]moon is the [E]only light we'll [A]see | [A] / / / |
| No, I [A]won't be afraid, oh, I [F#m]won't be afraid |
| Just as [D]long as you [E]stand, stand by [A]me | [A] / / / |

{section: Chorus}
| So darling, darling, [A]stand by me, oh [F#m]stand by me |
| Oh [D]stand, [E]stand by me, [A]stand by me | [A] / / / |`
  },
  {
    id: 's2',
    title: "Knockin' on Heaven's Door",
    artist: 'Bob Dylan',
    defaultKey: 'G',
    tempo: 68,
    timeSignature: '4/4',
    content: `{title: Knockin' on Heaven's Door}
{artist: Bob Dylan}
{key: G}

{section: Verse 1}
| [G]Mama, take this [D]badge off of [Am]me | [Am] / / / |
| [G]I can't [D]use it any[C]more | [C] / / / |
| [G]It's gettin' [D]dark, too dark to [Am]see | [Am] / / / |
| [G]I feel I'm [D]knockin' on heaven's [C]door | [C] / / / |

{section: Chorus}
| [G]Knock, knock, [D]knockin' on heaven's [Am]door | [Am] / / / |
| [G]Knock, knock, [D]knockin' on heaven's [C]door | [C] / / / |
| [G]Knock, knock, [D]knockin' on heaven's [Am]door | [Am] / / / |
| [G]Knock, knock, [D]knockin' on heaven's [C]door | [C] / / / |`
  },
  {
    id: 's3',
    title: 'Autumn Leaves',
    artist: 'Joseph Kosma / Miles Davis',
    defaultKey: 'Gm',
    tempo: 120,
    timeSignature: '4/4',
    content: `{title: Autumn Leaves}
{artist: Joseph Kosma}
{key: Gm}

{section: [A] Section}
| [Cm7] / / / | [F7] / / / | [Bbmaj7] / / / | [Ebmaj7] / / / |
| [Am7b5] / / / | [D7b9] / / / | [Gm] / / / | [G7] / / / |

{section: [A] Section (Repeat)}
| [Cm7] / / / | [F7] / / / | [Bbmaj7] / / / | [Ebmaj7] / / / |
| [Am7b5] / / / | [D7b9] / / / | [Gm] / / / | [Gm] / / / |

{section: [B] Section}
| [Am7b5] / / / | [D7b9] / / / | [Gm] / / / | [Gm] / / / |
| [Cm7] / / / | [F7] / / / | [Bbmaj7] / / / | [Ebmaj7] / / / |

{section: [C] Section}
| [Am7b5] / / / | [D7b9] / / / | [Gm7] [C7] | [Fm7] [Bb7] |
| [Ebmaj7] / / / | [D7b9] / / / | [Gm] / / / | [Gm] / / / |`
  },
  {
    id: 's4',
    title: "Ain't No Sunshine",
    artist: 'Bill Withers',
    defaultKey: 'Am',
    tempo: 78,
    timeSignature: '4/4',
    content: `{title: Ain't No Sunshine}
{artist: Bill Withers}
{key: Am}

{section: Verse 1}
| Ain't no sunshine when she's [Am]gone | [Em] [G] |
| It's not warm when she's [Am]away | [Em] [G] |
| Ain't no sunshine when she's [Am]gone, and she's always gone too [Em]long |
| Anytime she [Dm7]goes away | [Am] [Em] [G] |`
  },
  {
    id: 's5',
    title: 'Sukiyaki',
    artist: 'Kyu Sakamoto',
    defaultKey: 'G',
    tempo: 124,
    timeSignature: '4/4',
    referenceUrl: 'https://tabs.ultimate-guitar.com/tab/818637',
    content: `{title: Sukiyaki}
{artist: Kyu Sakamoto}
{key: G}

{section: Intro}
| [G] / / / | [Em] / / / | [Bm] / / / | [D] / / / |

{section: Verse 1}
| [G]Ue o [Em]muite, [G]aru-[Em]kou |
| [G]Namida ga kobo-[Bm]re nai yo-[Em7]uni | [Am7] / [D7] / |

{section: Chorus 1}
| [G]Omoida-[Am]su, [C6]haru no-[B7#5]hi | [B7] / / / |
| [Em]Hito-[C]ri-[Bm]bot-[Am7]chi no [G]yoru | [C6] [Bm] [Am7] |

{section: Verse 2}
| [G]Ue o [Em]muite, [G]aru-[Em]kou |
| [G]Nijin-da hosi [Bm]o kazo-[Em7]e...te | [Am7] / [D7] / |

{section: Chorus 2}
| [G]Omoida-[Am]su, [C6]natsu no-[B7#5]hi | [B7] / / / |
| [Em]Hito-[C]ri-[Bm]bot-[Am7]chi no [G]yoru | [Em] / [G7] / |

{section: Bridge 1}
| [C]Shiawase wa kumo [G]no ue-ni | [G7] / / / |
| [Cm]Shiawase wa sora [G]no ue-ni | [A9] / [D7] / |

{section: Verse 3}
| [G]Ue o [Em]muite, [G]aru-[Em]kou |
| [G]Namida ga kobo-[Bm]re nai yo-[Em7]uni | [Am7] / [D7] / |

{section: Chorus 3}
| [G]Nakinaga-[Am]ra, [C6]aru-[B7#5]ku | [B7] / / / |
| [Em]Hito-[C]ri-[Bm]bot-[Am7]chi no [G]yoru | [C6] [Bm] [Am7] |

{section: Interlude}
| [G] / [Em] / | [G] / [Em] / | [G] / [Bm] / | [Em7] [Am7] [D7] |

{section: Chorus 4}
| [G]Omoida-[Am]su, [C6]aki no-[B7#5]hi | [B7] / / / |
| [Em]Hito-[C]ri-[Bm]bot-[Am7]chi no [G]yoru | [Em] / [G7] / |

{section: Bridge 2}
| [C]Kanashimi wa hosi-[G]no kage-ni | [G7] / / / |
| [Cm]Kanashimi wa tsuki-[G]no kage-ni | [A9] / [D7] / |

{section: Verse 4 & Outro}
| [G]Ue o [Em]muite, [G]aru-[Em]kou |
| [G]Namida ga kobo-[Bm]re nai yo-[Em7]uni | [Am7] / [D7] / |
| [G]Nakinaga-[Am]ra, [C6]aru-[B7#5]ku | [B7] / / / |
| [Em]Hito-[C]ri-[Bm]bot-[Am7]chi no [G]yoru | [C6] [Bm] [Am7] |
| [G]Hito-[C]ri-[Bm]bot-[Am7]chi no [G]yoru | [C] [Bm] [Am7] |
| [G] / [Em] / | [G] / [Em] / | [G] / [Bm] / | [Em7] [Am7] [D7] |`
  },
  {
    id: 's6',
    title: 'The Lazy Song',
    artist: 'Bruno Mars',
    defaultKey: 'G',
    tempo: 88,
    timeSignature: '4/4',
    referenceUrl: 'https://tabs.ultimate-guitar.com/tab/bruno-mars/the-lazy-song-chords-1761018',
    content: `{title: The Lazy Song}
{artist: Bruno Mars}
{key: G}

{section: Chorus}
| Today I don't feel like [G]doing anything | [D] / [C] / |
| I just wanna [G]lay in my bed | [D] / [C] / |
| Don't feel like picking [G]up my phone, so leave a [D]message at the tone |
| 'Cause today I swear I'm [G]not doing [B7]anything | [C] / / / |

{section: Verse 1}
| Uh, I'm gonna kick my feet [G]up and stare at the fan | [D] / / / |
| [C]Turn the TV on, throw my hand in my pants | [C] / / / |
| Nobody's [G]gonna tell me [D]I can't, [C]nah | [C] / / / |
| I'll be lounging on the [G]couch, just chillin' in my snuggie | [D] / / / |
| [C]Click to MTV so they can teach me how to dougie | [C] / / / |
| 'Cause in my [G]castle I'm the [D]freakin' [C]man | [C] / / / |

{section: Pre-Chorus}
| Oh oh, [Am]yes I said it | [Bm]I said it |
| [C]I said it cause [D]I can | [D] / / / |

{section: Chorus}
| Today I don't feel like [G]doing anything | [D] / [C] / |
| I just wanna [G]lay in my bed | [D] / [C] / |
| Don't feel like picking [G]up my phone, so leave a [D]message at the tone |
| 'Cause today I swear I'm [G]not doing [B7]anything | [C] / / / |
| [G]Ooh hoo [D]ooh hoo | [C]Hoo ooh ooh |
| [G]Ooh hoo [D]ooh hoo | [C]Hoo ooh ooh |

{section: Verse 2}
| Tomorrow I wake [G]up, do some P90X | [D] / / / |
| [C]Meet a really nice girl, have some really nice sex | [C] / / / |
| And she's gonna scream [G]out, "this is [D]great" | [C] / / / |
| Yeah, I might mess a[G]round and get my college degree | [D] / / / |
| [C]I bet my old man will be so proud of me | [C] / / / |
| I'm sorry [G]pops, you'll [D]just have to [C]wait | [C] / / / |

{section: Pre-Chorus}
| Oh oh, [Am]yes I said it | [Bm]I said it |
| [C]I said it cause [D]I can | [D] / / / |

{section: Bridge}
| No, I [Am]ain't gonna comb my [D]hair | 'Cause I [Em]ain't going anywhere |
| [Am]No no no no [D]no no no no [Em]nooo | [Em] / / / |
| I'll just [Am]strut in my birthday [D]suit | And let [Em]everything hang loose |
| [Am]Yeah yeah yeah yeah [D]yeah yeah yeah [Em]yeah | [Em] / / / |

{section: Chorus / Outro}
| Ohh, today I don't feel like [G]doing anything | [D] / [C] / |
| I just wanna [G]lay in my bed | [D] / [C] / |
| Don't feel like picking [G]up my phone, so leave a [D]message at the tone |
| 'Cause today I swear I'm [G]not doing [B7]anything | [C] / / / |
| [G]Ooh hoo [D]ooh hoo | [C]Hoo ooh ooh |
| [G]Ooh hoo [D]ooh hoo | [C]Hoo ooh ooh |
| [G]Nothing at all | [G] / / / |`
  },
  {
    id: 's7',
    title: 'idontwannabeyouanymore',
    artist: 'Billie Eilish',
    defaultKey: 'G',
    tempo: 66,
    timeSignature: '4/4',
    referenceUrl: 'https://tabs.ultimate-guitar.com/tab/billie-eilish/idontwannabeyouanymore-chords-2089655',
    content: `{title: idontwannabeyouanymore}
{artist: Billie Eilish}
{key: G}

{section: Intro}
| [Gm] [C] [Am] [Gm] |

{section: Verse 1}
| [Gm]Don't be that way |
| [C]Fall apart twice a day |
| [Am]I just wish you could feel what you say [Gm] |
| [Gm]Show, never tell |
| [C]But I know you too well |
| [Am]Got a mood that you wish you could sell [Gm] |

{section: Chorus}
| If [Cmaj7]teardrops could be bottled |
| There'd be [Gmaj7]swimming pools filled by models |
| Told "that t[Am]ight dress is what makes you a w[B7]hore" |
| If "I [Cmaj7]love you" was a promise |
| Would you [Gmaj7]break it, if you're honest |
| Tell the [Am]mirror what you know she's heard be[D]fore[Dsus2]      [D] |
| [Cmaj7]Idontwanna[B7]beyouanym[Em]ore |

{section: Verse 2}
| [Gm]Hands getting cold |
| [C]Losing feeling's getting old |
| [Am]Was I made from a broken mold? [Gm] |
| [Gm]Hurt, I can't shake |
| [C]We've made every mistake |
| [Am]Only you know the way that I break [Gm] |

{section: Chorus}
| If [Cmaj7]teardrops could be bottled |
| There'd be [Gmaj7]swimming pools filled by models |
| Told "that t[Am]ight dress is what makes you a w[B7]hore" |
| If "I [Cmaj7]love you" was a promise |
| Would you [Gmaj7]break it, if you're honest |
| Tell the [Am]mirror what you know she's heard be[D]fore[Dsus2]      [D] |
| [Cmaj7]Idontwanna[B7]beyou |
| [Cmaj7]Idontwanna[B7]beyou |
| [Cmaj7]Idontwanna[B7]beyou... anym[Emadd9]ore |`
  },
  {
    id: 's8',
    title: 'From the Start',
    artist: 'Laufey',
    defaultKey: 'C',
    tempo: 84,
    timeSignature: '4/4',
    referenceUrl: 'https://tabs.ultimate-guitar.com/tab/laufey/from-the-start-chords-5825828',
    content: `{title: From the Start}
{artist: Laufey}
{key: C}

| [Dm] [Gmaj7] [C] |

| Don't you [Dm]notice [Gmaj7]how |
| [Cmaj7]I get quiet when there's no one |
| [Dm]Else ar[Gmaj7]ound? |
| [Cmaj7]Me and you and awkward silence |
| [Dm]Don't you d[Gmaj7]are |
| [Em]Look at me that [A]way |
| [Dm]I don't need reminders of how |
| [Gmaj7]You don't feel the same |

| Oh, the [Dm]burning [Gmaj7]pain |
| [Cmaj7]Listening to you harp on 'bout some |
| [Dm]new sou[Gmaj7]lmate |
| [Cmaj7]"She's so perfect, " blah, blah, blah |
| Oh,[Dm] how I[Gmaj7] wish |
| you'll[Em] wake up one[A] day |
| [Dm]Run to me, confess your love, |
| at [Gmaj7]least just let me say |

| That [Dm]when I t[Gmaj7]alk to you oh, |
| [Cmaj7]Cupid walks right through |
| And [Dm]shoots an [Gmaj7]arrow |
| [Cmaj7]through my heart |
| And [Dm]I sound like a[Gmaj7] loon, |
| but [Em]don't you [A]feel it too? |
| Co[Dm]nfess I [Gmaj7]loved you |
| from the [Cmaj7]start |

| What's a [Dm]girl to [Gmaj7]do? |
| [Cmaj7]Lying on my bed, staring |
| in[Dm]to the b[Gmaj7]luе |
| [Cmaj7]Unrequited, terrifying |
| [Dm]Lovе is [Gmaj7]driving me |
| a [Em]bit ins[A]ane |
| [Dm]Have to get this off my chest |
| I'm [Gmaj7]telling you today |

| That [Dm]when I t[Gmaj7]alk to you oh, |
| [Cmaj7]Cupid walks right through |
| And [Dm]shoots an [Gmaj7]arrow |
| [Cmaj7]through my heart |
| And [Dm]I sound like a[Gmaj7] loon, |
| but [Em]don't you f[A]eel it too? |
| Co[Dm]nfess I [Gmaj7]loved you |
| from the [Cmaj7]start |

| [Dm]Confess I [Gmaj7]loved you |
| Just[Em] thinking of [A]you |
| I [Dm]know I've [Gmaj7]loved you |
| from the [C]start. |`
  },
  {
    id: 's9',
    title: 'Odoriko',
    artist: 'Vaundy',
    defaultKey: 'G',
    tempo: 98,
    timeSignature: '4/4',
    referenceUrl: 'https://tabs.ultimate-guitar.com/tab/vaundy/odoriko-chords-4085335',
    content: `{title: Odoriko}
{artist: Vaundy}
{key: G}

{section: Intro}
| [G] [B7] [Em] [C] |

{section: Verse 1}
| Nee, [G]dokka ni oit[B7]ekita you na |
| Koto [Em]ga hitotsu futatsu uiteir[C]u kedo |
| Nee, ch[G]anto hiro[B7]tteokou |
| Haji[Em]kete wasureteshimau m[C]ae ni |

{section: Chorus}
| [G]Mawaridashita ano ko to b[B7]oku no mirai ga |
| [Em]Tomari dokka de mata y[C]arinao[Cm]setara |
| [G]Mawaridashita ano ko to b[B7]oku ga higaisha |
| [Em]Zura de dokka wo mata n[C]eriaru[Cm]ketara na |

| [G]Tu-ru-ru-ru tu-ru-ru-ru tu-ru-ru |
| [B7]Tu-ru-ru-ru tu-ru-ru-ru tu-ru-ru |
| [Em]Tu-ru-ru-ru tu-ru-ru-ru tu-ru-ru |
| [C]Tu-ru-ru-ru tu-ru-ru-ru [Cm]tu-ru-ru |

{section: Verse 2}
| Ano n[G]e, watashi ana[B7]ta ni atta no |
| Yume [Em]no naka ni oitekit[C]a kedo[Cm] ne |
| Nee, do[G]ushite watas[B7]hi ga suki nano |
| Ichi[Em]do shika atta koto ga n[C]ai no ni [Cm]ne |

{section: Pre-Chorus}
| [G]Omoi wo kette |
| [G]Futaride shitenda |
| Wa[B7]surenai ai wo utau |
| Kotoba wo fu[Em]tari ni kashite |
| [Em]Chikai wo tatenda |
| Was[C]urenai ai wo utau you ni ne |

{section: Chorus}
| [G]Mawaridashita ano ko to b[B7]oku no mirai ga |
| [Em]Tomari dokka de mata y[C]arinao[Cm]setara |
| [G]Mawaridashita ano ko to b[B7]oku ga higaisha |
| [Em]Zura de dokka wo mata n[C]eriaru[Cm]ketara na |

| [G]Tu-ru-ru-ru tu-ru-ru-ru tu-ru-ru |
| [B7]Tu-ru-ru-ru tu-ru-ru-ru tu-ru-ru |
| [Em]Tu-ru-ru-ru tu-ru-ru-ru tu-ru-ru |
| [C]Tu-ru-ru-ru tu-ru-ru-ru [Cm]tu-ru-ru |

| [G]Tu-ru-ru-ru tu-ru-ru-ru tu-ru-ru |
| [B7]Tu-ru-ru-ru tu-ru-ru-ru tu-ru-ru |
| [Em]Tu-ru-ru-ru tu-ru-ru-ru tu-ru-ru |
| [C]Tu-ru-ru-ru tu-ru-ru-ru [Cm]tu-ru-ru |

{section: Chorus}
| [G]Mawaridashita ano ko to b[B7]oku no mirai ga |
| [Em]Tomari dokka de mata y[C]arinao[Cm]setara |
| [G]Mawaridashita ano ko to b[B7]oku ga higaisha |
| [Em]Zura de dokka wo mata n[C]eriaru[Cm]ketara na |

{section: Outro}
| [G]Jidai ni notte bokutachi wa |
| [B7]Kawarazu ai ni ikiru darou |
| [Em]Bokura ga chitte nokoru no wa |
| [C]Kawaranu ai no [Cm]uta nandarou na |
| [G]Jidai ni notte bokutachi wa |
| [B7]Kawarazu ai ni ikiru darou |
| [Em]Bokura ga chitte nokoru no wa |
| [C]Kawaranu ai no [Cm]uta nandarou na |
| [G]Tu-ru-ru-ru tu-ru-ru-ru tu-ru-ru |
| [B7]Tu-ru-ru-ru tu-ru-ru-ru tu-ru-ru |
| [Em]Tu-ru-ru-ru tu-ru-ru-ru tu-ru-ru |
| [C]Tu-ru-ru-ru tu-ru-ru-ru [Cm]tu-ru-ru |`
  },
  {
    id: 's10',
    title: 'Hopelessly Devoted to You',
    artist: 'Olivia Newton-John',
    defaultKey: 'A',
    tempo: 65,
    timeSignature: '4/4',
    referenceUrl: 'https://tabs.ultimate-guitar.com/tab/misc-soundtrack/grease-hopelessly-devoted-to-you-chords-78008',
    content: `{title: Hopelessly Devoted to You}
{artist: Olivia Newton-John}
{key: A}

{section: Intro}
| [Dm] [A] [Dm] [A] [Dm] [A] |

{section: Verse 1}

| Guess [A]mine is not the [C#m7]first heart [D]broken |
| My [Bm7]eyes are not the [E7]first to [Amaj7]cry        [A6] |
| I'm [A]not the first to [F#7]know there's [G6]just no gettin' [F#7]over [Bm7]you [C#m7]      [Cm7]     [Bm7] |

| I [A]know I'm just a [C#m7]fool who's [D]willing |
| To [Bm7]sit around and [E7]wait for [Amaj7]you        [A6] |
| But, [A]baby, can't you [F#7]see there's [G6]nothin' else for [F#7]me to [Bm7]do |
| I'm [C#m7]hopelessly [Cm7]de - [Bm7]voted to [Dm]you      [A] |

{section: Chorus}

| But now there's [Gm7]nowhere to hide since you pushed my love a[C7]side[Caug] |
| I'm [F]out of my [Fmaj7]head, [Cdim]hopelessly devoted to [Gm7]you |
| [Gm7]Hopelessly de[C7]voted to [Dm]you  [Dm/C#]         [Dm/C]        [Dm/B] |
| [Gm7]Hopelessly de[C7]voted to [Dm]you      [A] |

{section: Verse 2}

| My [A]head is sayin',[C#m7]     "Fool, for[D]get him" |
| My [Bm7]heart is sayin', [E7]   "Don't let [Amaj7]go"        [A6] |
| [A]Hold on to the [F#7]end, [G6]that's what I in[F#7]tend to [Bm7]do |
| I'm [C#m7]hopelessly [Cm7]de - [Bm7]voted to [Dm]you      [A] |

{section: Chorus}

| But now there's [Gm7]nowhere to hide since you pushed my love a[C7]side[Caug] |
| I'm [F]out of my [Fmaj7]head, [Cdim]hopelessly devoted to [Gm7]you |
| [Gm7]Hopelessly de[C7]voted to [Dm]you  [Dm/C#]         [Dm/C]        [Dm/B] |
| [Gm7]Hopelessly de[C7]voted to [Bbm]you       [F] |
`
  },
  {
    id: 's11',
    title: 'Sweet Caroline',
    artist: 'Neil Diamond',
    defaultKey: 'A',
    tempo: 126,
    timeSignature: '4/4',
    referenceUrl: 'https://tabs.ultimate-guitar.com/tab/neil-diamond/sweet-caroline-chords-1053578',
    content: `{title: Sweet Caroline}
{artist: Neil Diamond}
{key: A}

{section: Intro}

| [E7] [E] [E7] [E] [E7] [A] |

| [A] |

{section: Verse 1}

| [A] Where it began, [D]  I can't begin to knowin' |
| [A] But then I know it's growin' [E]strong |
| [A] Was in the spring,[D]  and spring became a summer |
| [A] Who'd have believed you'd come a[E]long?[E7] |

{section: Pre-Chorus}

| [A]Hands,[F#m]   touching hands |
| [E] Reaching out,[D]  touching me, touching [E]you[E]  [D]  [E] |

{section: Chorus}

| [A]Sweet Caro[D]line[D], [A]  [D] good times never seemed so [E]good[E]  [D]  [E] |
| [A]I'd be in[D]clined[D], [A]  [D] to believe they never [E]would |
| [D]But [C#m]now [Bm]I |

{section: Verse 2}

| [A] Look at the night, [D]  and it don't seem so lonely |
| [A] We fill it up with only [E]two |
| [A] And when I hurt,[D]  hurting runs off my shoulder |
| [A] How can I hurt when holding [E]you?[E7] |

{section: Pre-Chorus}

| [A]Warm,[F#m]   touching warm |
| [E] Reaching out,[D]  touching me, touching [E]you[E]  [D]  [E] |

{section: Chorus}

| [A]Sweet Caro[D]line[D], [A]  [D] good times never seemed so [E]good[E]  [D]  [E] |
| [A]I'd be in[D]clined[D], [A]  [D] to believe they never [E]would |
| [D]Oh  [C#m]no  [Bm]no |

{section: Instrumental}

| [E7] [E] [E7] [E] [E7] [A] |

{section: Chorus}

| [A]Sweet Caro[D]line[D], [A]  [D] good times never seemed so [E]good[E]  [D]  [E] |
| [A]Sweet Caro[D]line[D], [A]  [D] I believe they never [E]could . . . |
`
  },
  {
    id: 's12',
    title: 'Seaside',
    artist: 'The Kooks',
    defaultKey: 'Dm',
    tempo: 112,
    timeSignature: '4/4',
    referenceUrl: 'https://tabs.ultimate-guitar.com/tab/the-kooks/seaside-chords-426370',
    content: `{title: Seaside}
{artist: The Kooks}
{key: Dm}

{section: Verse 1}
| [Dm]   Do you want to go to the [F]seaside? |
| I'm [Bb]not trying to say that [C]everybody wants to |
| [Dm]go. I fell in love at the [F]seaside |
| I [Bb]handled my charm with [C]time and slight of [G]hand  [G/F] |

{section: Verse 2}
| [Dm]   Do you want to go to the [F]seaside? |
| I'm [Bb]not trying to say that [C]everybody wants to |
| [Dm]go. I fell in love at the [F]seaside |
| She [Bb]handled her charm with [C]time and slight of [G]hand, hand, hand..[G/F] |

{section: Bridge}
| [Dm]      But I'm just trying to [Bb]love you any [C] kind of way |
| [Dm]      But I find it hard to [Bb]love you girl when your [C] far aw[G]a-a-ay, away[G/F] |

{section: Outro}
| [Dm]   Do you want to go to the [F]seaside? |
| I'm [Bb]not trying to say that [C]everybody wants to |
| [Dm]go. But I fell in love on the [F]seaside[Bb], on the [F]seaside[Bb], in the [F]seaside ... |`
  },
  {
    id: 's13',
    title: 'Plastic Love',
    artist: 'Mariya Takeuchi',
    defaultKey: 'Dm',
    tempo: 104,
    timeSignature: '4/4',
    referenceUrl: 'https://tabs.ultimate-guitar.com/tab/2155643',
    content: `{title: Plastic Love}
{artist: Mariya Takeuchi}
{key: Dm}

{section: Intro}
| [Gm9] [C7b9] [Am7] [Dm7] |
| [Gm9] [C7b9] [Am7] [Dm7] |

{section: Verse 1}
| [Gm9]Totsuzen no ki[C7b9]su ya [Am7]  atsui manaza[Dm7]shi de |
| [Gm9]Koi no purogu[C7b9]ramu o [Am7]  kuruwasenai [Dm7]de ne |
| Deai to [Gm9]wakare [Eb9]jozu ni [Dm7]uchikond[G9]e |
| Jikan ga [Gm9]kureba [C7b9]owaru |
| Don't [Dm7]hurry! [D7sus2] |

{section: Verse 2}
| [Gm9]Ai ni kizut[C7b9]suita   [Am7] anohi kara[Dm7] zutto |
| [Gm9]Hiru to yoru ga gy[C7b9]aku no [Am7]kurashi o tsuzu[Dm7]kete |
| Hayari no [Gm9]disco de [Eb9]odori a[Dm7]kasu uchi[G9]ni |
| Oboeta [Gm9]majutsu [C7b9]nanoyo |
| I'm [Dm7]sorry![Dm7]    [C/E]    [F]  [D7b9] |

{section: Chorus 1}
| [Bbmaj7]Watashi no ko[C]to o keshite [Bbmaj7]honki de [C]aisanai de |
| [Em7]Koi  [A7b9]nante t[Dm7]adano gemu |
| [Bb]Tanoshime[C]ba so[Am7]rede ii[Dm7]no |
| To[Bbmaj7]zashita ko[C]koro o kazaru [Bbmaj7]hadena dore[C]su mo kutsu mo |
| [Bbmaj7]Kodo -  [Am7]ku na tomo[D]dachi [D] |

{section: Guitar Solo}
| [Gm9] [Eb9] |
| [Dm7] [G9] |
| [Bbmaj7] [C7b9] |
| [Dm7] [Dm7] [Em7] [F] [D7b9] |

{section: Chorus 2}
| [Bbmaj7]Watashi o sa[C]sou hito wa [Bbmaj7]hinikuna mo[C]no ne itsumo |
| [Em7]kare [A7b9]ni nite[Dm7]ruwa nazeka |
| [Bbmaj7]Omoide [C]to ka[Am7]sanari[Dm7]au |
| Gu[Bbmaj7]rasu o oto[C]shite kyu ni [Bbmaj7]namidagun[C]demo wake wa |
| [Bbmaj7]Tazu -  [Am7]nenai [D]de ne  [D] |

{section: Verse 3}
| [Gm9]Ai ni kizut[C7b9]suita [Am7]anohi kara z[Dm7]utto |
| [Gm9]Hiru to yoru ga gy[C7b9]aku no [Am7]kurashi o tsuzu[Dm7]kete |
| Hayari no [Gm7]disco de [Eb9]odori a[Dm7]kasu uchi[G9]ni |
| Oboeta [Gm9]majutsu [C7b9]nanoyo |
| I'm [Dm7]sorry! [C/E]    [F]  [D7b9] |

{section: Chorus 3}
| [Bbmaj7]Watashi no ko[C]to o keshite [Bbmaj7]honki de [C]aisanai de |
| [Em7]Koi  [A7b9]nante ta[Dm7]dano gemu |
| [Bbmaj7]Tanoshime[C]ba so[Am7]rede ii[Dm7]no |
| To[Bbmaj7]zashita ko[C]koro o kazaru [Bbmaj7]hadena dore[C]su mo kutsu mo |
| [Bbmaj7]Kodo -  [Am7]ku na tomo[D]dachi |

{section: Verse 4}
| [Gm9]Yohuke no koso[C7b9]ku de [Am7]  nemuri ni tsuku [Dm7]koro |
| [Gm9]Harogen raito [C7b9]dake  [Am7]  ayashiku kaga[Dm7]yaku |
| Kori no [Gm9]yoni [Eb9]tsumetai [Dm7]onna dat[G9]o |
| Sasayaku [Gm9]koe ga [C7b9]shitemo |
| Don't [Dm7]worry! [D7sus2] |

{section: Outro}
| [Gm9]I'm just playing games |
| I [C7b9]know that's plastic [Am7]love [Dm7] |
| [Gm9]Dance to the plastic beat |
| A[C7b9]nother morning [Am7]comes...[Dm7]. |`
  },
  {
    id: 's14',
    title: "I Wan'na Be Like You",
    artist: 'The Jungle Book',
    defaultKey: 'C',
    tempo: 138,
    timeSignature: '4/4',
    referenceUrl: 'https://tabs.ultimate-guitar.com/tab/louis-prima/i-wanna-be-like-you-chords-1086921',
    content: `{title: I Wan'na Be Like You}
{artist: The Jungle Book}
{key: C}

{section: Intro}
| [Am] / / / | [Am] / / / | [E7] / / / | [E7] / / / |

{section: Verse 1}
| [Am]Now, I'm the king of the swingers, oh | The jungle V.I.[E7]P. |
| I've reached the top and had to stop | And that's what botherin' [Am]me |
| I wanna be a man, mancub | And stroll right into [E7]town |
| And be just like the other men | I'm tired of monkeyin' a[Am]round | [G7]Oh! |

{section: Chorus}
| [C]Ooh-bi-doo, I wanna be like [A7]you |
| I wanna [D7]walk like you, [G7]talk like you, [C]too |
| You'll see it's [A7]true, an ape like [D7]me |
| Can [G7]learn to be human [C]too | [G7] / / / |

{section: Verse 2}
| [Am]Now, don't try to kid me, mancub | I made a deal with [E7]you |
| What I desire is man's red fire | To make my dream come [Am]true |
| Give me the secret, mancub | Clue me what to [E7]do |
| Give me the power of man's red flower | So I can be like [Am]you | [G7]Oh! |

{section: Chorus / Outro}
| [C]Ooh-bi-doo, I wanna be like [A7]you |
| I wanna [D7]walk like you, [G7]talk like you, [C]too |
| You'll see it's [A7]true, an ape like [D7]me |
| Can [G7]learn to be human [C]too | [G7] / / / |
| Can [D7]learn to be [G7]like you [C]too! | [C] / / / |`
  },
  {
    id: 's15',
    title: 'Gangnam Style',
    artist: 'Psy',
    defaultKey: 'Bm',
    tempo: 132,
    timeSignature: '4/4',
    referenceUrl: 'https://tabs.ultimate-guitar.com/tab/psy/gangnam-style-chords-1175653',
    content: `{title: Gangnam Style}
{artist: Psy}
{key: Bm}

{section: Intro}
| [Bm] / / / | [Bm] / / / | [G] / / / | [A] / / / |
| [Bm] / / / | [Bm] / / / | [G] / / / | [F#7] / / / |

{section: Verse 1}
| [Bm]Najeneun ttasaroun inganjeogin yeoja | [Bm] / / / |
| [G]Keopi hanjanui yeoyureul aneun [A]pumgyeok inneun [F#7]yeoja |
| [Bm]Bami omyeon simjangi tteugeowojineun yeoja | [Bm] / / / |
| [G]Geureon banjeon inneun [F#7]yeoja | [F#7] / / / |

{section: Pre-Chorus}
| [Bm]Naneun sanai | [Bm] / / / |
| [G]Najeneun neomankeum ttasaroun [A]geureon [F#7]sanai |
| [Bm]Bami omyeon simjangi teojyeobeorineun sanai | [Bm] / / / |
| [G]Geureon sanai | [F#7] / / / |

{section: Chorus}
| [G]Areumdawa [A]sarangseureowa | [Bm]Geurae neo hey, geurae baro neo hey |
| [G]Areumdawa [A]sarangseureowa | [F#7]Jigeumbuteo gal dekkaji gabolkka |
| Oppan [Bm]Gangnam Style! | [Bm] / / / |
| [G]Gangnam Style! | [A] / / / |
| Oppan [Bm]Gangnam Style! | [Bm] / / / | [F#7] / / / |`
  }
];

export const PRESET_EVENTS: Event[] = [
  {
    id: 'e1',
    name: 'Acoustic Jam Night',
    date: '2026-09-15',
    venue: 'The Blue Note Lounge',
    songs: [
      { libraryId: 's1', transpose: 0 },
      { libraryId: 's2', transpose: 2 },
      { libraryId: 's4', transpose: 0 }
    ]
  },
  {
    id: 'e2',
    name: 'Jazz Standards Trio',
    date: '2026-09-22',
    venue: 'Village Vanguard',
    songs: [
      { libraryId: 's3', transpose: 0, viewModeOverride: 'grid' },
      { libraryId: 's1', transpose: -2 }
    ]
  },
  {
    id: 'e3',
    name: 'Activities Fair',
    date: '2026-09-11',
    venue: 'Activities Fair',
    songs: [
      { libraryId: 's5', transpose: 4, performer: 'Stash' },
      { libraryId: 's6', transpose: 2, performer: 'Daehee' },
      { libraryId: 's7', transpose: 0, performer: 'Hannah Sherrod' },
      { libraryId: 's8', transpose: 1, performer: 'Delphy', targetKey: 'Db' },
      { libraryId: 's9', transpose: 0, performer: 'Daehee' },
      { libraryId: 's10', transpose: 0, performer: 'Hannah Sherrod' },
      { libraryId: 's11', transpose: 2, performer: 'Stash' },
      { libraryId: 's12', transpose: 1, performer: 'Dyon' },
      { libraryId: 's13', transpose: 0, performer: 'Hannah Sherrod' },
      { libraryId: 's14', transpose: 0, performer: 'Dyon' },
      { libraryId: 's15', transpose: 0, performer: 'Daehee' }
    ]
  }
];

export const INITIAL_APP_STATE: AppState = {
  library: PRESET_LIBRARY,
  events: PRESET_EVENTS,
  activeEventId: 'e3',
  masterViewMode: 'lyrics'
};
