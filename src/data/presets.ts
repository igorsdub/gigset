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
| [G]Ue o muite, [Em]aru-kou | [G] / [Em] / |
| [G]Namida ga kobo-[Bm]re nai yo-[Em7]uni | [Am7] / [D7] / |

{section: Chorus 1}
| [G]Omoida-[Am]su, [C6]haru no-[B7#5]hi | [B7] / / / |
| [Em]Hito-[C]ri-[Bm]bot-[Am7]chi no [G]yoru | [C6] [Bm] [Am7] |

{section: Verse 2}
| [G]Ue o muite, [Em]aru-kou | [G] / [Em] / |
| [G]Nijin-da hosi [Bm]o kazo-[Em7]e...te | [Am7] / [D7] / |

{section: Chorus 2}
| [G]Omoida-[Am]su, [C6]natsu no-[B7#5]hi | [B7] / / / |
| [Em]Hito-[C]ri-[Bm]bot-[Am7]chi no [G]yoru | [Em] / [G7] / |

{section: Bridge 1}
| [C]Shiawase wa kumo [G]no ue-ni | [G7] / / / |
| [Cm]Shiawase wa sora [G]no ue-ni | [A9] / [D7] / |

{section: Verse 3}
| [G]Ue o muite, [Em]aru-kou | [G] / [Em] / |
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
| [G]Ue o muite, [Em]aru-kou | [G] / [Em] / |
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
    referenceUrl: 'https://tabs.ultimate-guitar.com/tab/billie-eilish/idontwannabeyouanymore-chords-2200427',
    content: `{title: idontwannabeyouanymore}
{artist: Billie Eilish}
{key: G}

{section: Intro}
| [Cmaj7] / / / | [Gmaj7] / / / | [Am] / / / | [Gmaj7] / / / |

{section: Verse 1}
| [Cmaj7]Don't be that way | [Gmaj7]Fall apart twice a day |
| [Am]I just wish you could [Gmaj7]feel what you say | [Gmaj7] / / / |
| [Cmaj7]Show, never tell | [Gmaj7]But I know you too well |
| [Am]Got a mood that you [Dsus2]wish you could [D]sell | [D] / / / |

{section: Chorus}
| [Cmaj7]If teardrops could be bottled | [Gmaj7]There'd be swimming pools filled by models |
| [Am]Told "that tight dress is what makes you a [B7]whore" | [B7] / / / |
| [Cmaj7]If "I love you" was a promise | [Gmaj7]Would you break it, if you're honest |
| [Am]Tell the mirror what you know she's heard [D]before | [D] / / / |
| [Cmaj7]Idontwannabeyou [B7]anymore | [Em] / / / |

{section: Verse 2}
| [Cmaj7]Hand, hands about mine | [Gmaj7]Was it something I said? |
| [Am]Baby, don't waste your [Gmaj7]time | [Gmaj7] / / / |
| [Cmaj7]Really thought I lost my mind | [Gmaj7]If only you could see |
| [Am]The way you look from the [Dsus2]in-[D]side | [D] / / / |

{section: Outro}
| [Cmaj7]If "I love you" was a promise | [Gmaj7]Would you break it, if you're honest |
| [Am]Tell the mirror what you know she's heard [D]before | [D] / / / |
| [Cmaj7]Idontwannabeyou [B7]anymore | [Em] / / / |`
  },
  {
    id: 's8',
    title: 'From the Start',
    artist: 'Laufey',
    defaultKey: 'Db',
    tempo: 84,
    timeSignature: '4/4',
    referenceUrl: 'https://tabs.ultimate-guitar.com/tab/laufey/from-the-start-chords-4780517',
    content: `{title: From the Start}
{artist: Laufey}
{key: Db}

{section: Intro}
| [Dbmaj7] / / / | [Ebm9] / [Ab13] / | [Dbmaj7] / / / | [Ebm9] / [Ab13] / |

{section: Verse 1}
| [Dbmaj7]Don't you notice how | I get [Ebm9]quiet when there's [Ab13]no one else around? |
| [Dbmaj7]Me and you and awkward silence | [Ebm9]Don't you dare look [Ab13]at my eyes |
| [Fm7]I've been hiding [Bb7#5]something lately | [Ebm9]Scared of what's [Ab13]inside |

{section: Verse 2}
| [Dbmaj7]Oh, you couldn't care less | [Ebm9]Tuesday night talking 'bout [Ab13]your crush and |
| [Dbmaj7]I'm dying, don't you see | [Ebm9]There's no one else but [Ab13]you for me? |
| [Fm7]I sigh and bite my tongue, [Bb7#5]listening to your song |
| [Ebm9]While you play along | [Ab13] / / / |

{section: Chorus}
| [Gbmaj7]That's when I say I've loved you from the [Gbm7]start |
| In a [Fm7]whisper made for two, say you [Bb7#5]love me too |
| [Ebm9]Cupid, walk right by, [Ab13]arrow in my eye |
| [Dbmaj7]Listening to you talk, I'm burning [Db7]up inside |
| [Gbmaj7]That's when I say I've loved you from the [Gbm7]start |
| In a [Fm7]whisper made for two, say you [Bb7#5]love me too |
| [Ebm9]Cupid, walk right by, [Ab13]arrow in my eye |
| [Dbmaj7] / / / | [Ebm9] / [Ab13] / |`
  },
  {
    id: 's9',
    title: 'Odoriko',
    artist: 'Vaundy',
    defaultKey: 'G',
    tempo: 98,
    timeSignature: '4/4',
    referenceUrl: 'https://tabs.ultimate-guitar.com/tab/vaundy/odoriko-chords-4116413',
    content: `{title: Odoriko}
{artist: Vaundy}
{key: G}

{section: Intro}
| [G] / / / | [B7] / / / | [Em] / / / | [C] / / / |
| [G] / / / | [B7] / / / | [Em] / / / | [C] / / / |

{section: Verse 1}
| [G]Nee, dokka ni oite[B7]kita you na |
| [Em]Koto ga hitotsu futatsu uiteiru [C]kedo |
| [G]Nee, chanto hirot[B7]teokou |
| [Em]Hajikete wasureteshimau [C]mae ni |

{section: Chorus 1}
| [G]Mada mawari tsuzu[B7]keteru |
| [Em]Bokura no hibi wa koto mo [C]naku | [Cm] / / / |
| [G]Kimi ga warau tabi [B7]ni |
| [Em]Yureteru, yureteru kaze [C]no naka | [Cm] / / / |

{section: Verse 2}
| [G]Nee, itsuka wa owatte[B7]shimau nara |
| [Em]Bokura wa nani o nokoseru darou [C]ka |
| [G]Nee, tsunaida te no [B7]nukumori mo |
| [Em]Itsuka wa kiete shimau no [C]ka na |

{section: Chorus 2 / Outro}
| [G]Odoriko yo kono mama [B7]odori mashou |
| [Em]Asa ga kuru made [C]futari dake de | [Cm] / / / |
| [G]Mada mawari tsuzu[B7]keteru |
| [Em]Bokura no sekai de [C] / [Cm] / | [G] / / / |`
  },
  {
    id: 's10',
    title: 'Hopelessly Devoted to You',
    artist: 'Olivia Newton-John',
    defaultKey: 'A',
    tempo: 65,
    timeSignature: '4/4',
    referenceUrl: 'https://tabs.ultimate-guitar.com/tab/misc-soundtrack/hopelessly-devoted-to-you-chords-2751433',
    content: `{title: Hopelessly Devoted to You}
{artist: Olivia Newton-John}
{key: A}

{section: Intro}
| [A] / / / | [Dm] / / / | [A] / / / | [Dm] / / / |

{section: Verse 1}
| [A]Guess mine is not the [C#m7]first heart broken | [D] / / / |
| [Bm7]My eyes are not the [E7]first to cry | [Amaj7] / / / |
| [A]I'm not the [F#7]first to know there's | [G6]just [F#7]no getting [Bm7]over you |
| [C#m7] [Cm7] | [Bm7] / [E7] / |

{section: Verse 2}
| [A]You know I'm just a [C#m7]fool who's willing | [D] / / / |
| [Bm7]To sit around and [E7]wait for you | [Amaj7] / / / |
| [A]Baby, can't you [F#7]see there's | [G6]nothing [F#7]else for [Bm7]me to do? |
| [C#m7]I'm [Cm7]hopelessly [Bm7]devoted to [Dm]you | [A] / / / |

{section: Chorus}
| [Gm7]But now there's [C7]nowhere to hide | [F]Since you pushed my [Fmaj7]love aside |
| [Cdim]I'm [Gm7]out of my head, [C7]hopelessly devoted to [Dm]you |
| [Dm/C#]Hopelessly [Dm/C]devoted to [Dm/B]you |
| [Gm7]Hopelessly [C7]devoted to [Dm]you | [A] / / / |`
  },
  {
    id: 's11',
    title: 'Sweet Caroline',
    artist: 'Neil Diamond',
    defaultKey: 'A',
    tempo: 126,
    timeSignature: '4/4',
    referenceUrl: 'https://tabs.ultimate-guitar.com/tab/neil-diamond/sweet-caroline-chords-83738',
    content: `{title: Sweet Caroline}
{artist: Neil Diamond}
{key: A}

{section: Intro}
| [E] / / / | [E] / / / | [E] / / / | [E] / / / |

{section: Verse 1}
| [A]Where it began, | [D]I can't begin to knowing |
| [A]But then I know it's growing [E]strong | [E] / / / |
| [A]Was in the spring, | [D]and spring became the summer |
| [A]Who'd have believed you'd come a[E]long? | [E] / / / |

{section: Pre-Chorus}
| [A]Hands, | [A6]touching hands |
| [E]Reaching out, [D]touching me, touching [E]you | [E] / [D] [E] |

{section: Chorus}
| [A]Sweet Caro[D]line | [D]Good times never seemed so [E]good | [E] / [D] [E] |
| [A]I've been in[D]clined | [D]To believe they never [E]would |
| [D]But [C#m]now [Bm]I |

{section: Verse 2}
| [A]Look at the night | [D]and it don't seem so lonely |
| [A]We fill it up with only [E]two | [E] / / / |
| [A]And when I hurt, | [D]hurting runs off my shoulders |
| [A]How can I hurt when holding [E]you? | [E] / / / |

{section: Chorus / Outro}
| [A]Sweet Caro[D]line | [D]Good times never seemed so [E]good | [E] / [D] [E] |
| [A]I've been in[D]clined | [D]To believe they never [E]would |
| [A]Sweet Caro[D]line | [E] / / / | [A] / / / |`
  },
  {
    id: 's12',
    title: 'Seaside',
    artist: 'The Kooks',
    defaultKey: 'Dm',
    tempo: 112,
    timeSignature: '4/4',
    referenceUrl: 'https://tabs.ultimate-guitar.com/tab/the-kooks/seaside-chords-178496',
    content: `{title: Seaside}
{artist: The Kooks}
{key: Dm}

{section: Intro}
| [Dm] / / / | [F] / / / | [Bb] / / / | [C] / / / |

{section: Verse 1}
| [Dm]Do you want to go to the [F]seaside? | [Bb] / [C] / |
| [Dm]I'm not trying to say that | [F]everybody wants to [Bb]go | [C] / / / |
| [Dm]I fell in love at the [F]seaside | [Bb] / [C] / |
| [Dm]I handle my love [F]well, | [Bb]hope I [C]do |

{section: Chorus}
| [Dm]Do you want to go to the [F]seaside? | [Bb] / [C] / |
| [Dm]I'm not trying to say that | [F]everybody wants to [Bb]go | [C] / / / |
| [Dm]I fell in love at the [F]seaside | [Bb] / [C] / |
| [Dm]She handles her love [F]well, | [Bb]hope she [C]does |

{section: Bridge}
| [Dm]Down on the beach, we walked to[Bb]gether | [C] / / / |
| [Dm]Watching the waves crash into the [Bb]sand | [C] / / / |
| [Dm]I held your hand through stormy [Bb]weather | [C] / / / |
| [Dm]Hoping that you would under[Bb]stand | [C] / / / |

{section: Outro}
| [Dm]Do you want to go to the [F]seaside? | [Bb] / [C] / |
| [Dm]I handle my love [F]well, | [Bb]hope I [C]do | [Dm] / / / |`
  },
  {
    id: 's13',
    title: 'Plastic Love',
    artist: 'Mariya Takeuchi',
    defaultKey: 'Dm',
    tempo: 104,
    timeSignature: '4/4',
    referenceUrl: 'https://tabs.ultimate-guitar.com/tab/mariya-takeuchi/plastic-love-chords-2538183',
    content: `{title: Plastic Love}
{artist: Mariya Takeuchi}
{key: Dm}

{section: Intro}
| [Gm7] / / / | [C7] / / / | [Am7] / / / | [Dm7] / / / |
| [Gm7] / / / | [C7] / / / | [Am7] / / / | [Dm7] / / / |

{section: Verse 1}
| [Gm7]Totsuzen no kisu ya | [C7]atsui manazashi de |
| [Am7]Koi no puroguramu o | [Dm7]kuruwasenaide ne |
| [Gm7]Deai to wakare | [C7]jouzu ni tanoshinde |
| [Am7]Namida nado misenaide | [Dm7]kurasu mainichi |

{section: Chorus 1}
| [Gm7]I'm just playing games, [C7]I know that's plastic love |
| [Am7]Dancefloor de nagareru [Dm7]merodi ni awasete |
| [Gm7]Kokoro o tozashite [C7]karen ni mau dake |
| [Am7]Watashi o mitomete [Dm7]iru wake ja nai |

{section: Verse 2}
| [Gm7]Fushigi na me de mitsumeru | [C7]anata no hitomi ga |
| [Am7]Sasayaku kotoba sae | [Dm7]shinji rarezu ni iru |
| [Gm7]Keredo samishisa o | [C7]magirawaseru tame |
| [Am7]Koyoi mo dareka to | [Dm7]odoreba ii |

{section: Chorus 2 / Outro}
| [Gm7]Don't worry! [C7]dareka ga mata |
| [Am7]Watashi o sasotte [Dm7]kuru keredo |
| [Gm7]Honto no ai nado [C7]koko ni wa nai no |
| [Am7]Plastic love ga [Dm7]tsuduku dake |
| [Gm7] / / / | [C7] / / / | [Am7] / / / | [Dm7] / / / |`
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
      { libraryId: 's8', transpose: 0, performer: 'Delphy' },
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
