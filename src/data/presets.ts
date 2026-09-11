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
    referenceUrl: 'https://music.youtube.com/watch?v=q091Oefm2U8&si=GVxnWlrI8to8XdnK',
    content: `{title: Sukiyaki}
{artist: Kyu Sakamoto}
{key: G}

{section: Intro}
| [G] / / / | [Em] / / / | [C] / / / | [D7] / / / |

{section: Verse 1}
| [G]Ue o muite [Em]arukou | [C]namida ga [D7]koborenai you ni |
| [G]Omoidasu [Em]haru no hi | [C]hitoribotchi no [D7]yoru |

{section: Chorus 1}
| [G]Shiawase wa [B7]kumo no ue ni | [Em]shiawase wa [A7]sora no [D7]ue ni |
| [G]Ue o muite [Em]arukou | [C]namida ga [D7]koborenai you [G]ni | [G] / / / |

{section: Verse 2}
| [G]Naki nagara [Em]aruku | [C]hitotsu no [D7]yoru |
| [G]Omoidasu [Em]natsu no hi | [C]hitoribotchi no [D7]yoru |

{section: Bridge}
| [C]Kanashimi wa [G]hoshi no kage ni | [C]kanashimi wa [D7]tsuki no kage ni |

{section: Verse 3 / Outro}
| [G]Ue o muite [Em]arukou | [C]namida ga [D7]koborenai you ni |
| [G]Naki nagara [Em]aruku | [C]hitoribotchi no [D7]yoru |
| [G] / / / | [Em] / / / | [C] / [D7] / | [G] / / / |`
  },
  {
    id: 's6',
    title: 'The Lazy Song',
    artist: 'Bruno Mars',
    defaultKey: 'B',
    tempo: 88,
    timeSignature: '4/4',
    referenceUrl: 'https://music.youtube.com/watch?v=hS2BVRnQiYI',
    content: `{title: The Lazy Song}
{artist: Bruno Mars}
{key: B}

{section: Chorus}
| Today I don't feel like [B]doing anything | [F#] / / / |
| I just wanna [E]lay in my bed | [E] / / / |
| Don't feel like picking up my [B]phone, so leave a message at the [F#]tone |
| 'Cause today I swear I'm not [E]doing anything | [E] / / / |

{section: Verse 1}
| Uh, I'm gonna kick my feet [B]up, then stare at the fan |
| [F#]Turn the TV on, throw my hand in my pants |
| [E]Nobody's gon' tell me I can't | [E] / / / |
| I'll be lounging on the [B]couch, just chillin' in my Snuggie |
| [F#]Click to MTV, so they can teach me how to dougie |
| [E]'Cause in my castle I'm the freakin' man | [E] / / / |

{section: Pre-Chorus}
| [C#m]Oh, yes, I said it, I [D#m]said it, I said it 'cause I can |
| [E] / / / | [F#] / / / |

{section: Chorus}
| Today I don't feel like [B]doing anything | [F#] / / / |
| I just wanna [E]lay in my bed | [E] / / / |
| Don't feel like picking up my [B]phone, so leave a message at the [F#]tone |
| 'Cause today I swear I'm not [E]doing anything | [E] / / / |

{section: Verse 2}
| Tomorrow I'll wake up, [B]do some P90X |
| Meet a [F#]really nice girl, have some really nice sex |
| And [E]she's gonna scream out: "This is great!" | [E] / / / |
| Yeah, I might mess a[B]round and get my college degree |
| I bet my [F#]old man will be so proud of me |
| But [E]sorry, pops, you'll just have to wait | [E] / / / |

{section: Bridge}
| No, I ain't gonna comb my [C#m]hair | 'Cause I ain't going any[F#]where |
| [B]No, no, [F#/A#]no, no, [G#m]no | [G#m] / / / |
| I'll just strut in my birthday [C#m]suit | And let everything hang [F#]loose |

{section: Outro}
| Today I don't feel like [B]doing anything | [F#] / / / |
| I just wanna [E]lay in my bed | [E] / / / |
| 'Cause today I swear I'm not [E]doing anything | [B] / / / |`
  },
  {
    id: 's7',
    title: 'idontwannabeyouanymore',
    artist: 'Billie Eilish',
    defaultKey: 'G',
    tempo: 66,
    timeSignature: '4/4',
    referenceUrl: 'https://music.youtube.com/watch?v=WnUR3be5Ebk',
    content: `{title: idontwannabeyouanymore}
{artist: Billie Eilish}
{key: G}

{section: Intro}
| [Gmaj7] / / / | [Cmaj7] / / / | [Gmaj7] / / / | [Cmaj7] / / / |

{section: Verse 1}
| Don't be that [Gmaj7]way | Fall apart twice a [Cmaj7]day |
| I just wish you could [Gmaj7]feel what you say | [Cmaj7] / / / |
| Show, never [Gmaj7]tell | But I know you too [Cmaj7]well |
| Got a mood that you [Gmaj7]wish you could sell | [Cmaj7] / / / |

{section: Chorus}
| If [Em7]teardrops could be bottled | There'd be [Cmaj7]swimming pools filled by models |
| Told a [Gmaj7]tightrope walker it was okay to fall | [D7] / / / |
| If "I love [Em7]you" was a promise | Would you [Cmaj7]break it, if you're honest? |
| Tell the [Gmaj7]mirror what you know she's heard before | [D7] / / / |
| I don't wanna be [Cmaj7]you | [Cmaj7]anymore |

{section: Verse 2}
| Hand, hands about [Gmaj7]mine | Was it something I [Cmaj7]said? |
| "Baby, don't waste your [Gmaj7]time" | [Cmaj7] / / / |
| Really thought I lost my [Gmaj7]mind | If only you could [Cmaj7]see |
| The way you look from the [Gmaj7]inside | [Cmaj7] / / / |

{section: Bridge}
| [Am7]Was I made from broken glass? | [D7]How long will the feeling last? |
| [Gmaj7]Nothing seems to make much sense | [Em7] / / / |
| [Am7]Standing on the razor wire | [D7]Watching all the dreams expire |

{section: Outro}
| If "I love [Em7]you" was a promise | Would you [Cmaj7]break it, if you're honest? |
| Tell the [Gmaj7]mirror what you know she's heard before | [D7] / / / |
| I don't wanna be [Cmaj7]you | [D7]anymore | [Gmaj7] / / / |`
  },
  {
    id: 's8',
    title: 'From the Start',
    artist: 'Laufey',
    defaultKey: 'Db',
    tempo: 84,
    timeSignature: '4/4',
    referenceUrl: 'https://music.youtube.com/watch?v=h8DeZSB2o-c&si=4TXVkPItL6_ciAXW',
    content: `{title: From the Start}
{artist: Laufey}
{key: Db}

{section: Intro}
| [Dbmaj7] / / / | [Ebm7] [Ab7] | [Dbmaj7] / / / | [Ebm7] [Ab7] |

{section: Verse 1}
| [Dbmaj7]Don't you notice how | I get [Ebm7]quiet when there's [Ab7]no one else around? |
| [Dbmaj7]Me and you and awkward silence | [Ebm7]Don't you dare look [Ab7]at my eyes |
| [Fm7]I've been hiding some[Bbm7]thing lately | [Ebm7]Scared of what's in[Ab7]side |

{section: Verse 2}
| [Dbmaj7]Oh, you couldn't care less | [Ebm7]Tuesday night talking 'bout [Ab7]your crush and |
| [Dbmaj7]I'm dying, don't you see | [Ebm7]There's no one else but [Ab7]you for me? |
| [Fm7]I sigh and bite my tongue, [Bbm7]listening to your song |
| [Ebm7]While you play along | [Ab7] / / / |

{section: Chorus}
| [Gbmaj7]That's when I say I've loved you from the [Gbm7]start |
| In a [Fm7]whisper made for two, say you [Bb7]love me too |
| [Ebm7]Cupid, walk right by, [Ab7]arrow in my eye |
| [Dbmaj7]Listening to you talk, I'm burning [Db7]up inside |
| [Gbmaj7]That's when I say I've loved you from the [Gbm7]start |
| In a [Fm7]whisper made for two, say you [Bb7]love me too |
| [Ebm7]Cupid, walk right by, [Ab7]arrow in my eye |
| [Dbmaj7] / / / | [Ebm7] [Ab7] |

{section: Bridge}
| [Gbmaj7]Oh, what am I supposed to do? | [Gbm7]When all I want is only you |
| [Fm7]Thinking of you night and day | [Bb7]Nothing left for me to say |
| [Ebm7] / / / | [Ab7] / / / |

{section: Outro}
| [Gbmaj7]That's when I say I've loved you from the [Gbm7]start |
| In a [Fm7]whisper made for two, say you [Bb7]love me too |
| [Ebm7]Cupid, walk right by, [Ab7]arrow in my eye |
| [Dbmaj7]Listening to you talk, I'm burning [Dbmaj7]up inside |`
  },
  {
    id: 's9',
    title: 'Odoriko',
    artist: 'Vaundy',
    defaultKey: 'G',
    tempo: 98,
    timeSignature: '4/4',
    referenceUrl: 'https://music.youtube.com/watch?v=7HgJIAUtICU',
    content: `{title: Odoriko}
{artist: Vaundy}
{key: G}

{section: Intro}
| [Em7] / / / | [Cmaj7] / / / | [G] / / / | [D] / / / |
| [Em7] / / / | [Cmaj7] / / / | [G] / / / | [D] / / / |

{section: Verse 1}
| [Em7]Mata mawari hajiketa | [Cmaj7]bokura no jikan wa |
| [G]Itsumo to onaji you de | [D]sukoshi chigau no sa |
| [Em7]Kimi ga warau dake de | [Cmaj7]subete ga kawatte |
| [G]Kiete shimai sou na | [D]yoru o koete yuku |

{section: Chorus}
| [Em7]Odoriko yo, kono mama | [Cmaj7]futari dake no sekai de |
| [G]Yurete itai dake sa | [D]asa ga kuru made |
| [Em7]Kimi no te o nigitte | [Cmaj7]tsurete iku yo dokoka e |
| [G]Mada minu keshiki o | [D]sagashi ni ikou |

{section: Verse 2}
| [Em7]Kasuka ni kikoeru | [Cmaj7]ano hi no rizumu ga |
| [G]Mune no oku de mata | [D]hibiki hajimete |
| [Em7]Oboete iru ka na | [Cmaj7]ano toki no yakusoku |
| [G]Futari de waratta | [D]ano kisetsu no koto |

{section: Bridge}
| [Cmaj7]Kaze ga toori nukete | [D]namida mo kawaku koro |
| [Bm7]Bokura wa mata hitotsu | [Em7]otona ni naru keredo |
| [Am7]Kono omoi dake wa | [Bm7]keshite kienai you ni |
| [C]Kokoro ni kizamou | [D]itsumademo |

{section: Chorus / Outro}
| [Em7]Odoriko yo, kono mama | [Cmaj7]futari dake no sekai de |
| [G]Yurete itai dake sa | [D]asa ga kuru made |
| [Em7]Kimi no te o nigitte | [Cmaj7]tsurete iku yo dokoka e |
| [G]Mada minu keshiki o | [D]sagashi ni ikou |
| [Em7] / / / | [Cmaj7] / / / | [G] / / / | [D] / / / | [G] / / / |`
  },
  {
    id: 's10',
    title: 'Hopelessly Devoted to You',
    artist: 'Olivia Newton-John',
    defaultKey: 'A',
    tempo: 65,
    timeSignature: '4/4',
    referenceUrl: 'https://music.youtube.com/watch?v=3pl7-RapmhY',
    content: `{title: Hopelessly Devoted to You}
{artist: Olivia Newton-John}
{key: A}

{section: Intro}
| [A] / / / | [C#m7] / / / | [D] / / / | [E7] / / / |

{section: Verse 1}
| Guess mine is not the [A]first heart broken | [C#m7] / / / |
| My eyes are not the [D]first to cry | [Bm7] [E7] |
| I'm not the [C#m7]first to know there's | [F#7]just no getting over you |
| [Bm7] / / / | [E7] / / / |

{section: Verse 2}
| You know I'm just a [A]fool who's willing | [C#m7] / / / |
| To sit around and [D]wait for you | [Bm7] [E7] |
| Baby, can't you [C#m7]see there's | [F#7]nothing else for me to do? |
| I'm [Bm7]hopelessly devoted to [E7]you | [E7] / / / |

{section: Chorus}
| But now there's [D]nowhere to hide | Since you pushed my love aside |
| I'm [C#m7]out of my head, [F#m]hopelessly devoted to [Bm7]you | [E7] / / / |
| Hopelessly devoted to [A]you | [A7] / / / |
| But now there's [D]nowhere to hide | Since you pushed my love aside |
| I'm [C#m7]out of my head, [F#m]hopelessly devoted to [Bm7]you | [E7] / / / |
| Hopelessly devoted to [A]you | [C#m7] / / / | [D] / / / | [E7] / / / |

{section: Verse 3}
| My head is saying, "[A]Fool, forget him" | [C#m7] / / / |
| My heart is saying, "[D]Don't let go" | [Bm7] [E7] |
| "Hold on to the [C#m7]end" | That's [F#7]what I intend to do |
| I'm [Bm7]hopelessly devoted to [E7]you | [E7] / / / |

{section: Outro}
| But now there's [D]nowhere to hide | Since you pushed my love aside |
| I'm [C#m7]out of my head, [F#m]hopelessly devoted to [Bm7]you | [E7] / / / |
| Hopelessly devoted to [A]you | [C#m7] / / / | [D] / [Dm] / | [A] / / / |`
  },
  {
    id: 's11',
    title: 'Sweet Caroline',
    artist: 'Neil Diamond',
    defaultKey: 'B',
    tempo: 126,
    timeSignature: '4/4',
    referenceUrl: 'https://music.youtube.com/watch?v=GmK5_lnQUbE&si=-Z626KQe9vkc-mPK',
    content: `{title: Sweet Caroline}
{artist: Neil Diamond}
{key: B}

{section: Intro}
| [F#] / / / | [E] / / / | [F#] / / / | [F#] / / / |

{section: Verse 1}
| [B]Where it began, | [E]I can't begin to knowing |
| [B]But then I know it's growing [F#]strong | [F#] / / / |
| [B]Was in the spring, | [E]and spring became the summer |
| [B]Who'd have believed you'd come a[F#]long? | [F#] / / / |

{section: Pre-Chorus}
| [B]Hands, | [Bmaj7]touching hands |
| [G#m]Reaching out, | touching [F#]me, touching [E]you | [F#] / / / |

{section: Chorus}
| [B]Sweet Caro[E]line | [E]Good times never seemed so [F#]good |
| [B]I've been in[E]clined | [E]To believe they never [F#]would |
| [E]But [D#m]now [C#m]I |

{section: Verse 2}
| [B]Look at the night | [E]and it don't seem so lonely |
| [B]We fill it up with only [F#]two | [F#] / / / |
| [B]And when I hurt, | [E]hurting runs off my shoulders |
| [B]How can I hurt when holding [F#]you? | [F#] / / / |

{section: Pre-Chorus}
| [B]Warm, | [Bmaj7]touching warm |
| [G#m]Reaching out, | touching [F#]me, touching [E]you | [F#] / / / |

{section: Chorus / Outro}
| [B]Sweet Caro[E]line | [E]Good times never seemed so [F#]good |
| [B]I've been in[E]clined | [E]To believe they never [F#]would |
| [B]Sweet Caro[E]line | [F#] / / / | [B] / / / |`
  },
  {
    id: 's12',
    title: 'Seaside',
    artist: 'The Kooks',
    defaultKey: 'D#m',
    tempo: 112,
    timeSignature: '4/4',
    referenceUrl: 'https://music.youtube.com/watch?v=TqFSaKZP-UE',
    content: `{title: Seaside}
{artist: The Kooks}
{key: D#m}

{section: Intro}
| [D#m] / / / | [B] / / / | [F#] / / / | [C#] / / / |

{section: Verse 1}
| [D#m]Do you want to go to the seaside? | [B] / / / |
| [F#]I'm not trying to say that | every[C#]body wants to go |
| [D#m]I fell in love at the seaside | [B] / / / |
| [F#]I handle my love well, | [C#]hope I do |

{section: Chorus}
| [D#m]Do you want to go to the seaside? | [B] / / / |
| [F#]I'm not trying to say that | every[C#]body wants to go |
| [D#m]I fell in love at the seaside | [B] / / / |
| [F#]She handles her love well, | [C#]hope she does |

{section: Verse 2}
| [D#m]Down on the beach, we walked together | [B] / / / |
| [F#]Watching the waves crash into the [C#]sand |
| [D#m]I held your hand through stormy weather | [B] / / / |
| [F#]Hoping that you would under[C#]stand |

{section: Outro}
| [D#m]Do you want to go to the seaside? | [B] / / / |
| [F#]I'm not trying to say that | every[C#]body wants to go |
| [D#m]I fell in love at the seaside | [B] / / / |
| [F#]I handle my love well, | [C#]hope I do | [D#m] / / / |`
  },
  {
    id: 's13',
    title: 'Plastic Love',
    artist: 'Mariya Takeuchi',
    defaultKey: 'Dm',
    tempo: 104,
    timeSignature: '4/4',
    referenceUrl: 'https://music.youtube.com/watch?v=u6y5NSiRPOw&si=uvU4mKywWJgp4idD',
    content: `{title: Plastic Love}
{artist: Mariya Takeuchi}
{key: Dm}

{section: Intro}
| [Dm7] / / / | [Gm7] / / / | [C7] / / / | [Fmaj7] [A7] |
| [Dm7] / / / | [Gm7] / / / | [Bbmaj7] / / / | [A7] / / / |

{section: Verse 1}
| [Dm7]Totsuzen no kisu ya | [Gm7]atsui manazashi de |
| [C7]Koi no puroguramu o | [Fmaj7]kuruwasenaide [A7]ne |
| [Dm7]Deai to wakare | [Gm7]jouzu ni tanoshinde |
| [Bbmaj7]Namida nado misenaide | [A7]kurasu mainichi |

{section: Chorus 1}
| [Gm7]I'm just playing games, [C7]I know that's plastic love |
| [Fmaj7]Dancefloor de nagareru [Bbmaj7]merodi ni awasete |
| [Em7b5]Kokoro o tozashite [A7]karen ni mau dake |
| [Dm7]Watashi o mitomete [D7]iru wake ja nai |
| [Gm7]I'm just playing games, [C7]I know that's plastic love |
| [Fmaj7]Iroazayaka na [Bbmaj7]machinami no naka de |
| [Em7b5]Hitori samayou [A7]yoru no mukougawa |
| [Dm7] / / / | [Dm7] / / / |

{section: Verse 2}
| [Dm7]Fushigi na me de mitsumeru | [Gm7]anata no hitomi ga |
| [C7]Sasayaku kotoba sae | [Fmaj7]shinji rarezu ni [A7]iru |
| [Dm7]Keredo samishisa o | [Gm7]magirawaseru tame |
| [Bbmaj7]Koyoi mo dareka to | [A7]odoreba ii |

{section: Chorus 2 / Outro}
| [Gm7]Don't worry! [C7]dareka ga mata |
| [Fmaj7]Watashi o sasotte [Bbmaj7]kuru keredo |
| [Em7b5]Honto no ai nado [A7]koko ni wa nai no |
| [Dm7]Plastic love ga [D7]tsuduku dake |
| [Gm7] / / / | [C7] / / / | [Fmaj7] / / / | [Bbmaj7] / / / |
| [Em7b5] / / / | [A7] / / / | [Dm7] / / / | [Dm7] / / / |`
  },
  {
    id: 's14',
    title: "I Wan'na Be Like You",
    artist: 'The Jungle Book',
    defaultKey: 'C',
    tempo: 138,
    timeSignature: '4/4',
    referenceUrl: 'https://music.youtube.com/watch?v=veWM-hsPx-4',
    content: `{title: I Wan'na Be Like You}
{artist: The Jungle Book}
{key: C}

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

{section: Chorus}
| [C]Ooh-bi-doo, I wanna be like [A7]you |
| I wanna [D7]walk like you, [G7]talk like you, [C]too |
| You'll see it's [A7]true, an ape like [D7]me |
| Can [G7]learn to be human [C]too | [G7] / / / |

{section: Outro}
| Can [G7]learn to be human [C]too | [A7]Yeah! |
| Can [D7]learn to be [G7]like you [C]too! | [C] / / / |`
  },
  {
    id: 's15',
    title: 'Gangnam Style',
    artist: 'Psy',
    defaultKey: 'Bm',
    tempo: 132,
    timeSignature: '4/4',
    content: `{title: Gangnam Style}
{artist: Psy}
{key: Bm}

{section: Intro}
| [Bm] / / / | [Bm] / / / | [G] / / / | [A] / / / |
| [Bm] / / / | [Bm] / / / | [G] / / / | [F#7] / / / |
| Oppan Gangnam [Bm]Style! | [Bm] / / / | [G] / [A] / | [Bm] / / / |

{section: Verse 1}
| [Bm]Najeneun ttasaroun inganjeogin yeoja |
| [G]Keopi hanjanui yeoyureul aneun [A]pumgyeok inneun yeoja |
| [Bm]Bami omyeon simjangi tteugeowojineun yeoja |
| [G]Geureon banjeon inneun [F#7]yeoja |

{section: Pre-Chorus}
| [Bm]Naneun sanai | [Bm]Najeneun neomankeum ttasaroun geureon sanai |
| [G]Keopi sikgido jeone wonsyat ttaerineun [A]sanai |
| [Bm]Bami omyeon simjangi teojyeobeorineun sanai |
| [G]Geureon sanai | [F#7] / / / |

{section: Chorus}
| Areumdawa [G]sarangseureowa | Geurae neo [A]hey, geurae baro neo [F#7]hey |
| Areumdawa [G]sarangseureowa | Geurae neo [A]hey, geurae baro neo [F#7]hey |
| Jigeumbuteo gal dekkaji gabolkka | [F#7] / / / |
| Oppan Gangnam [Bm]Style! | [Bm] / / / |
| [G]Gangnam Style! | [A] / / / |
| Oppan Gangnam [Bm]Style! | [Bm] / / / |
| [G]Gangnam Style! | [F#7] / / / |
| Eh, sexy [Bm]lady! | [Bm] / / / | [G] / [A] / |
| Oppan Gangnam [Bm]Style! | [Bm] / / / | [Em] [F#7] | [Bm] / / / |`
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
      { libraryId: 's6', transpose: -2, performer: 'Daehee' },
      { libraryId: 's7', transpose: 0, performer: 'Hannah Sherrod' },
      { libraryId: 's8', transpose: 0, performer: 'Delphy' },
      { libraryId: 's9', transpose: 0, performer: 'Daehee' },
      { libraryId: 's10', transpose: 0, performer: 'Hannah Sherrod' },
      { libraryId: 's11', transpose: 0, performer: 'Stash' },
      { libraryId: 's12', transpose: 0, performer: 'Dyon' },
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
