/**
 * Objects used to build levels
 */

/**
 * ROOMS
 * Players can cd between rooms
 *
 * API: Room(roomname, introtext, img){
 */

//HOME
var Home = new Room("Home",
    "You are in the comfort of your own home.",
    "loc_home.png",
    "Look at your surroundings with the command \"ls\". \n" +
    "Move to a new location with the command \"cd Location/Activity\" \n" +
    "You can backtrack with the command \"cd ..\". \n" +
    "Interact with items in the world with the command \"less ITEM\" \n" +
    "If you forget where you are, type \"pwd\" \n" +
    "Go ahead, explore. We hope you enjoy what you find. Do cd or ls as your first command.\n",
    "item_home.gif");

//first comment the awakening
var TheAwakening = new Room("TheAwakening",
    "Clink Clink- You have Awaken! \
        Welcome to the Awakening! \
        You wake up and look at your creator. \
        Interact with items using the command \"less ITEM\". \ ",
    "loc_awake.png");
// The Desolation
var theDesolation = new Room("theDesolation",
    "Use the command less ITEM to select the correct item to kill William, your creator's brother. ",
    "loc_desolation.png");
theDesolation.addItem(new Item("gloves",
    " You have collected gloves! \
        You have used the gloves to strangle William- your creator's brother! \ " +
    "You have killed William! \ ",
    "item_gloves.png"));
theDesolation.addItem(new Item("knife",
    "Hmmm, Are you sure this is the correct item? \
        Use less and the correct item to complete the objective and try again. \ " +
    "item_knife.png"));
// The Cottage
var theCottage = new Room("theCottage",
    "You have been fleed to the Cottage. \
        Which items are used in theCottage? \ ",
    "loc_cottage.png");
theCottage.addItem(new Item("book",
    "You have used the book to learn how to read succesfuly. \
            You have learned how to read! \ ",
            "item_book.png"));
theCottage.addItem(new Item("headphones",
    "You have used the headphones to listen to music. \
            You have listened to music but they have not helped you learn how to read! \
            Lyrics to the song:",
            "item_headphones.png"));

theCottage.addItem(new Item("friendliness_potion",
    "You used the friendliness_potion to attempt to make friends with the family in the cottage. \" \
            You have been recieved with extreme hate and beatings! \ ",
            "item_friendliness_potion.png"));
// The Trial
var theTrial = new Room("theTrial",
    "You have been transported to the Trial. \
        Which item will you use to hide in the corner? \ " +
    "loc_trial.png");

theTrial.addItem(new Item("cloak",
    "You have used the cloak to hide in the corner succesfuly. \
        Justine has been convicted and she will expire later. \ "));

theTrial.addItem(new Item("cape",
    "Hmmm, Are you sure this is the correct item? \
        Use less and the correct item to complete the objective and try again. \ "));
//PORTAL (to bring you to the next level
var Portal = new Room("Portal",
    "You have been transported through time...",
    "item_portal.gif");
//---------------The Awakening-----------------

//TOWN SQUARE
var TownSquare = new Room("TownSquare",
    "You are in a sunny and spacious town square. \
There is a pedestal at the center of the cobblestone turnabout, but no statue on it. \
The architecture is charming, but everyone here seems nervous for some reason.",
    "loc_square.gif");
TownSquare.addItem(new Item("RandomCitizen1",
    "\"Excuse me,\" you begin. The man turns, startled. \
\"Oh, hello! Welcome to Terminus. You'll have to forgive me, but we're all a little \
on edge lately, what with the Dark Wizard spreading corruption all along the \
coast.  You should be careful!\"",
    "item_citizen1.gif"));
TownSquare.addItem(new Item("RandomCitizen2",
    "The man looks up from his newspaper when he notices you staring. \
\"Have you read this?\" he exclaims, shaking the latest edition of \"The Last \
Word\" in your face. \"It says here the wizard's corruption has spread as far \
as Oston to the south, and New Console is completely unrecoverable! These are \
dangerous times,\" he mutters, shaking his head and turning back to his reading.",
    "item_citizen2.gif"));
TownSquare.addItem(new Item("DistraughtLady",
    "The woman is sobbing uncontrollably, her face in her hands. \
\"My baby,\" she cries, \"They kidnapped my baby! I just know that wizard had \
something to do with it.\"",
    "item_lady.gif"));

//MARKETPLACE
var Marketplace = new Room("Marketplace",
    "Vendors and their goods line the streets.",
    "loc_market.gif");
var Vendor = new Item("Vendor",
    "\" 'Ello there.\" The vendor smiles at you unpleasantly, \
revealing a mouth full of gold teeth. \"Well? Wot are you looking for?\"",
    "item_merchant.gif");
Vendor.addCmdText("rm",
    "\"Ha! That spell doesn't work on everything, you know. I may have forgotten \
to mention that before I sold it to you...\"");
Marketplace.addItem(Vendor);
//var Backpack = new Item("Backpack", "There's a beat-up looking backpack on the table with no price tag.  Its cloth looks \n" +
//		"frayed, but sturdy. You glance quickly at the vendor, but his attention is elsewhere. \n" +
//		"Do you take the backpack? y\\n \n", "item_backpack.gif");
//Marketplace.addItem(Backpack);
var RmSpell = new Item("rmSpell",
    "\"Ah, yes, the rm spell,\" the Vendor muses. \"Simply say \"rm\" followed by the name of an item or person, \
and they will disappear from this plane... forever. D'you have the guts to use it, I wonder?\"",
    "item_manuscript.gif");

//	"There's a spell scroll on the table labeled \"Remove.\" \n" +
//		"Do you want to buy it for 15 gold pieces? y/n \n", "item_manuscript.gif")
//"The vendor snatches the gold from your hand and then hands you the scroll,\n" +
//				"leering as he does so. \"Ah, yes, the rm spell,\" he muses. \"Simply say \"rm\" followed by the name of an item or person, \n" +
//				"and they will disappear from this plane... forever. D'you have the guts to use it, I wonder?\"\n" +
//				"You can now use the \"rm\" spell.\n", "Come back later.\n");
Marketplace.addItem(RmSpell);
var MkdirSpell = new Item("mkdirSpell",
    "\"Make dreams into reality. Just say \"mkdir\" followed by any name that pleases you, and you can create a new place that \
never existed there before. A little finicky, though...\" the Vendor mumbles.",
    "item_manuscript.gif");
//		"Do you want to buy it for 30 gold pieces? y\\n \n"
//, "The vendor cackles. \"An ambitious one, eh? Very well. \n" +
//				"Just say \"mkdir\" followed by any name that pleases you, and you can create a new place \n" +
//				"that never existed there before. Ha! Not very useful, if y'ask me...\"\n" +
//				"You can now use the \"mkdir\" spell.\n", "You leave the mkdirSpell on the table\n");
Marketplace.addItem(MkdirSpell);

//LIBRARY
var Library = new Room("Library",
    "The Library is dimly lit and smells like mildew. \
Still, it's warm in here and the soft green carpet makes it seem kind of cozy.",
    "loc_library.gif");
Library.addItem(new Item("TotallyRadSpellbook",
    "Legends speak of a great word of power that allows the speaker to perform \
any action on any item. \"Sudo\", as the ancients called it, conveys complete mastery over the elements. \
Unfortunately, or perhaps fortunately, the mystical password has been lost \
to the sands of time.",
    "item_radspellbook.gif"));
Library.addItem(new Item("PaperbackRomance",
    "You flip the paperback open to a random page. \
\"Oh, Horatio, don't worry my love! I will save you!\" Antonia exclaimed as she \
brandished her sword and deftly stabbed the dragon. Horatio, astounded that he hadn't died a fiery death,\
 collapsed on the ground sobbing and  ... — You close the \
book, disinterested, and place it back on the shelf.",
    "item_romancenovel.gif"));
Library.addItem(new Item("HistoryOfTerminus",
    "It looks like an interesting book, but it's way too long and the print is too tiny. \
Here is an excerpt:\n \
DarkWizard', '...old tales tell of a DarkWizard who will fragment the land...\n \
...only the world-maker can stop the DarkWizard's virus from...\
...that the power of \"sudo\" may be the DarkWizard's only weakness...\n",
    "item_historybook.gif"));
Library.addItem(new Item("NostalgiaForHome",
    "If you ever get lonely for Home, just 'cd ~' and you'll go back there. \
But just remember that it will be harder to come back.",
    "item_historybook.gif"));
// "DarkWizard", "...old tales tell of a dark wizard who will fragment the land...\n" +
//"...only the world-maker can stop the dark wizard's virus from...\n" +
//"...that the power of \"sudo\" may be the dark wizard's only weakness...\n"));
//add lever back when items when events can be added to items
Library.addItem(new Item("InconspicuousLever",
    "You spot an inconspicuous lever behind the shelves.  Curious, you pull it, \
and a panel slides open to reveal a secret back room.",
    "item_lever.gif"));
Library.addCommand("grep");
Library.ev.addListener("pullLever", function() {
    state.applyState("pullLever");
});

//BACK ROOM
var BackRoom = new Room("BackRoom",
    "You find a mysterious back room. You find a librarian \
alone with a small elf. You hope you're not interrupting.",
    "loc_backroom.gif");
BackRoom.addItem(new Item("Grep",
    "The exceptionally ugly elf turns to you with a sour expression. \
\"Greeeeeep,\" he says sullenly.",
    "grep.gif"));
BackRoom.addItem(new Item("PracticeBook",
    "Sally picked a peck\nOf seashelled peppers.\nA seashore of pickled pickles\
did Peter and Sally pick."));
var Librarian = new Item("Librarian",
    "\"Hm? Oh, hello. I apologize for the mess, but I'm very busy \
doing research on the dark wizard. Would you do me a favor? Go look up all \
references to DarkWizard in the History of Terminus. My assistant Grep \
can help you.\" \
Grep eyes you balefully. \"Greeepp.\" \"To search the contents of the book, just type \
\"grep PHRASE ITEM\", where PHRASE is the phrase you want to search for, \
and ITEM is the name of the book you want to search. Try it with the PracticeBook here \
- see if you can find the line with the word 'peppers' in it.\"",
    "item_librarian.gif");
BackRoom.addItem(Librarian);
BackRoom.addCommand("grep");

//ROCKY PATH
var RockyPath = new Room("RockyPath",
    "The weed-choked path leads off into the fields.",
    "loc_rockypath.gif");
var LargeBoulder = new Item("LargeBoulder", "There is an enormous boulder blocking your way.  It's much too big to move.", "item_boulder.gif");
LargeBoulder.addCmdText("rm", "The boulder disappears with a pop.");
RockyPath.addItem(LargeBoulder);
RockyPath.addCommand("rm");
LargeBoulder.addValidCmd("rm");
RockyPath.ev.addListener("rmLargeBoulder", function() {
    state.applyState("rmLargeBoulder");
});

//ARTISAN'S SHOP
var ArtisanShop = new Room("ArtisanShop",
    "The walls of the shop are covered in clocks, \
all slightly out of sync. At the workbench, a woman in an enormous pair of goggles \
is wielding a blowtorch with frightening enthusiasm.",
    "loc_artisanshop.gif");
var StrangeTrinket = new Item("StrangeTrinket", "It looks like a crystal of some sort. It's very beautiful.", "item_trinket.gif");
StrangeTrinket.addCmdText("rm",
    "Didn't your mother ever teach you that it's rude to rease other people's \
things from their plane of existence?");
StrangeTrinket.addCmdText("mv",
    "You can't take that, it's not yours!");
ArtisanShop.addItem(StrangeTrinket);
var ClockworkDragon = new Item("ClockworkDragon",
    "A dragon the size of a small dog is frolicking about the room. \
You'd think it was real if it weren't for the wind-up key sticking out of its back.",
    "item_clockdragon.gif");
ClockworkDragon.addCmdText("rm",
    "Didn't your mother ever teach you that it's rude to erase other people's \
things from their plane of existence?");
ClockworkDragon.addCmdText("mv",
    "You can't take that, it's not yours!");
ArtisanShop.addItem(ClockworkDragon);
var Artisan = new Item("Artisan",
    "The Artisan lifts up her goggles and peers at you in \
surprise. \"Are you the new assistant? You're late! ...  \
\
You say you aren't my assistant? \
Well, that doesn't mean you can't make yourself useful. I need some gears, quickly! \
\
... \
\
You don't even know how to make things? Hmph. Some assistant you are. Just \
say \"touch ITEM\" alright? Where ITEM is the name of the thing you want to create. \
Now make me a Gear! Then come back.\"",
    "item_artisan.gif");
ArtisanShop.addItem(Artisan);
ArtisanShop.addCommand("touch");
ArtisanShop.ev.addListener("touchGear", function() {
    state.applyState("touchGear");
});
ArtisanShop.ev.addListener("FiveGearsCopied", function() {
    state.applyState("FiveGearsCopied");
});

//FARM
var Farm = new Room("Farm",
    "There was once a farm of some sort here, but now the fields are scorched and brown.",
    "loc_farm.gif");
var EarOfCorn = new Item("EarOfCorn",
    "The corn is sad and withered-looking.",
    "item_corn.gif");
EarOfCorn.addCmdText("rm",
    "Why would you destroy a starving man's only food?");
Farm.addItem(EarOfCorn);
var Farmer = new Item("Farmer",
    "\"Ruined! I'm ruined! Look at these crops... almost nothing \
left! The wizard's minions were here last week... they destroyed everything. How \
will I feed my 3 children with just one ear of corn? I could really use AnotherEarOfCorn! \"",
    "item_farmer.gif");
Farm.addItem(Farmer);
Farm.addCommand("cp");
Farm.ev.addListener("CornCopied", function() {
    state.applyState("CornCopied");
});

//CLEARING
var Clearing = new Room("Clearing",
    "There's a small grassy clearing here, with a man sitting on a \
stone, weeping. Behind him is a pile of rubble.",
    "loc_clearing.gif");
var CryingMan = new Item("CryingMan",
    "\"You! You're a magic-user! I can tell, you've got that look. \
Come to finish the job, have you? Well, go ahead, do your worst there's nothing else you \
can take from me. Not since the rest of you were here a few days ago.\" \
\n\
\"What happened? You DARE to ask-- you know perfectly well what happened. \
Your friends, the wizard's minions, destroyed my house and kidnapped my poor \
daughter, that's what! My wife even went into town to look for help, and I haven't \
heard from her since!\" \
\n\
\"Hm? Well, I guess it's true that you don't look like one of the wizard's minions. Still, \
I don't trust you magicfolk. If you really are who you say you are, then prove your \
good intentions by making me a new House!\"",
    "item_man.gif");
Clearing.addItem(CryingMan);
Clearing.removeCommand("cd");
Clearing.addCmdText("cd", "You can’t cross the bridge until you’ve replaced the missing Plank.");
Clearing.addCommand("mkdir");
Clearing.ev.addListener("HouseMade", function() {
    state.applyState("HouseMade");
});

//BROKEN BRIDGE
var BrokenBridge = new Room("BrokenBridge",
    "A creaky wooden bridges stretches across a chasm. But it's missing a \
Plank, and the gap is too far to jump.",
    "loc_bridge.gif");
//beforeClearing = new Room("Clearing", "You can't cross the bridge until you've replaced the missing Plank.", "");
BrokenBridge.addCommand("touch");
BrokenBridge.ev.addListener("touchPlank", function() {
    // link_rooms(BrokenBridge, Clearing);
    state.applyState("touchPlank");
});

//OMINOUS-LOOKING PATH
var OminousLookingPath = new Room("OminousLookingPath",
    "The path leads toward a dark cave. It's an ordinary cobblestone path, but for \
some reason it fills you with a sense of dread.",
    "loc_path.gif");
var ThornyBrambles = new Item("ThornyBrambles",
    "This thicket of brambles is covered with wicked-looking thorns. You \
can't go around it, and you definitely aren't about to go through it. And yet something \
tells you that you really want to.",
    "item_brambles.gif");
ThornyBrambles.addCmdText("mv",
    "You can't touch them because they are covered with thorns. Ouch!");
ThornyBrambles.addCmdText("rm",
    "You speak the words of the Remove spell and the brambles glimmer a \
deep blue. After fizzling for a minute, they disappear with a puff of smoke.");
ThornyBrambles.addValidCmd("rm");
OminousLookingPath.addItem(ThornyBrambles);
OminousLookingPath.addCommand("rm");
OminousLookingPath.ev.addListener("rmBrambles", function() {
    state.applyState("rmBrambles");
});

//SLIDE
var Slide = new Room("Slide", "The slides is long. At the end, you see the KernelFiles.");
Slide.removeCommand("cd");
Slide.addCmdText("cd", "You have to get past the UglyTroll first.");

//KERNEL FILES
var KernelFiles = new Room("KernelFiles", "The KernelFiles hold the sudo-secret (no, not \
pseudo). You'd better read the Instructions.")
var Certificate = new Item("Certificate", "You must read the Certificate with the sudo password.");
KernelFiles.addItem(Certificate);
var Instructions = new Item("Instructions", "You've learned how to make use of your friend grep I see. \
If you haven't it might be wise for you to go back to the Library again to do some reading. \
Because here, you'll need to use him to help you. Here is your task: \
There are a lot of items in the MoreKernelFiles room and one of them contains the sudo password. This \
password is very powerful password that lets you do absolutely anything in the world. \
It lets you cast a spell on any item that is protected in any way. You know the password \
is contained in one of these .txt items. You know that it appears \
on a line that says the word: 'password='. You should find it with grep's help. \
Then you'll need to use the sudo spell to find Paradise. To do this, just \
Type 'sudo' before the command you want to run, like so: \
'sudo cp ITEM_A ITEM_B'. You will then be prompted for the sudo password. \
Type the password, and the spell that comes after sudo will be cast. If you open \
the Certificate in Paradise with sudo, you will have truly found Paradise.");
var L_txt = new Item("L_txt", "Alice was beginning to get very tired of sitting by her \
sister on the bank, and of having nothing to do: once or twice she had peeped into the \
book her sister was reading, but it had no pictures or conversations in it, 'and what is \
the use of a book,' thought Alice 'without pictures or conversation?' \n\
So she was considering in her own mind (as well as she could, for the hot day \
made her feel very sleepy and stupid), whether the pleasure of making a \
daisy-chain would be worth the trouble of getting up and picking the daisies, \
when suddenly a White Rabbit with pink eyes ran close by her.\n\
There was nothing so VERY remarkable in that; nor did Alice think it \
so VERY much out of the way to hear the Rabbit say to itself, \
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \
it occurred to her that she ought to have wondered at this, but at the \
time it all seemed quite natural); but when the Rabbit actually TOOK A \
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \
Alice started to her feet, for it flashed across her mind that she had \
never before seen a rabbit with either a waistcoat-pocket, or a watch \
to take out of it, and burning with curiosity, she ran across the \
field after it, and fortunately was just in time to see it pop down \
a large rabbit-hole under the hedge. \n\
In another moment down went Alice after it, never once considering how \
in the world she was to get out again. \n\
The rabbit-hole went straight on like a tunnel for some way, and then \
dipped suddenly down, so suddenly that Alice had not a moment to think \
about stopping herself before she found herself falling down a very deep well.\n\
Either the well was very deep, or she fell very slowly, for she had \
plenty of time as she went down to look about her and to wonder what \
was going to happen next. First, she tried to look down and make out what \
she was coming to, but it was too dark to see anything; then she looked at \
the sides of the well, and noticed that they were filled with cupboards and \
book-shelves; here and there she saw maps and pictures hung upon pegs. She \
took down a jar from one of the shelves as she passed; it was labelled \
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \
not like to drop the jar for fear of killing somebody, so managed to put it \
into one of the cupboards as she fell past it. \n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \
think nothing of tumbling down stairs! How brave they'll all think me \
at home! Why, I wouldn't say anything about it, even if I fell off the \
top of the house!' (Which was very likely true.)\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \
many miles I've fallen by this time?' she said aloud. 'I must be getting \
somewhere near the centre of the earth. Let me see: that would be four \
thousand miles down, I think—' (for, you see, Alice had learnt several \
things of this sort in her lessons in the schoolroom, and though this \
was not a VERY good opportunity for showing off her knowledge, as \
there was no one to listen to her, still it was good practice to say it \
over) '—yes, that's about the right distance—but then I wonder what \
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \
or Longitude either, but thought they were nice grand words to say.)\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \
earth! How funny it'll seem to come out among the people that walk with \
their heads downward! The Antipathies, I think—' (she was rather glad \
there WAS no one listening, this time, as it didn't sound at all the \
right word) '—but I shall have to ask them what the name of the country is, \
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \
the air! Do you think you could manage it?) 'And what an ignorant little \
girl she'll think me for asking! No, it'll never do to ask: perhaps I \
shall see it written up somewhere.' \n\
Down, down, down. There was nothing else to do, so Alice soon began \
talking again. 'Dinah'll miss me very much to-night, I should think!' \
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \
tea-time. Dinah my dear! I wish you were down here with me! There are \
no mice in the air, I'm afraid, but you might catch a bat, and that's \
very like a mouse, you know. But do cats eat bats, I wonder?' And here \
Alice began to get rather sleepy, and went on saying to herself, in a \
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \
'Do bats eat cats?' for, you see, as she couldn't answer either question, \
it didn't much matter which way she put it. She felt that she was \
dozing off, and had just begun to dream that she was walking hand \
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \
tell me the truth: did you ever eat a bat?' when suddenly, thump! \
thump! down she came upon a heap of sticks and dry leaves, and the \
fall was over.\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \
she looked up, but it was all dark overhead; before her was another \
long passage, and the White Rabbit was still in sight, hurrying down \
it. There was not a moment to be lost: away went Alice like the wind, \
and was just in time to hear it say, as it turned a corner, 'Oh my \
ears and whiskers, how late it's getting!' She was close behind it \
when she turned the corner, but the Rabbit was no longer to be seen: \
she found herself in a long, low hall, which was lit up by a row \
of lamps hanging from the roof. \n\
There were doors all round the hall, but they were all locked; \
and when Alice had been all the way down one side and up the other, \
trying every door, she walked sadly down the middle, wondering how \
she was ever to get out again.\n\
Suddenly she came upon a little three-legged table, all made of \
solid glass; there was nothing on it except a tiny golden key, and \
Alice's first thought was that it might belong to one of the doors \
of the hall; but, alas! either the locks were too large, or the \
key was too small, but at any rate it would not open any of them. \
However, on the second time round, she came upon a low curtain she \
had not noticed before, and behind it was a little door about fifteen \
inches high: she tried the little golden key in the lock, and to her \
great delight it fitted! \n\
Alice opened the door and found that it led into a small passage, not \
much larger than a rat-hole: she knelt down and looked along the \
passage into the loveliest garden you ever saw. How she longed to \
get out of that dark hall, and wander about among those beds of bright \
flowers and those cool fountains, but she could not even get her head \
through the doorway; 'and even if my head would go through,' thought \
poor Alice, 'it would be of very little use without my shoulders. Oh, \
how I wish I could shut up like a telescope! I think I could, if I \
only know how to begin.' For, you see, so many out-of-the-way things \
had happened lately, that Alice had begun to think that very few \
things indeed were really impossible. \n\
There seemed to be no use in waiting by the little door, so she went \
back to the table, half hoping she might find another key on it, or at \
any rate a book of rules for shutting people up like telescopes: this \
time she found a little bottle on it, ('which certainly was not here \
before,' said Alice,) and round the neck of the bottle was a paper \
label, with the words 'DRINK ME' beautifully printed on it in large \
letters.\n\
It was all very well to say 'Drink me,' but the wise little Alice was \
not going to do THAT in a hurry. 'No, I'll look first,' she said, \
'and see whether it's marked \"poison\" or not'; for she had read \
several nice little histories about children who had got burnt, \
and eaten up by wild beasts and other unpleasant things, all because \
they WOULD not remember the simple rules their friends had taught \
them: such as, that a red-hot poker will burn you if you hold it \
too long; and that if you cut your finger VERY deeply with a knife, \
it usually bleeds; and she had never forgotten that, if you drink \
much from a bottle marked 'poison,' it is almost certain to \
disagree with you, sooner or later. \n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \
taste it, and finding it very nice, (it had, in fact, a sort of mixed \
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \
and hot buttered toast,) she very soon finished it off.");
var M_txt = new Item("M_txt", "Alice was beginning to get very tired of sitting by her \
sister on the bank, and of having nothing to do: once or twice she had peeped into the \
book her sister was reading, but it had no pictures or conversations in it, 'and what is \
the use of a book,' thought Alice 'without pictures or conversation?' \n\
So she was considering in her own mind (as well as she could, for the hot day \
made her feel very sleepy and stupid), whether the pleasure of making a \
daisy-chain would be worth the trouble of getting up and picking the daisies, \
when suddenly a White Rabbit with pink eyes ran close by her.\n\
There was nothing so VERY remarkable in that; nor did Alice think it \
so VERY much out of the way to hear the Rabbit say to itself, \
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \
it occurred to her that she ought to have wondered at this, but at the \
time it all seemed quite natural); but when the Rabbit actually TOOK A \
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \
Alice started to her feet, for it flashed across her mind that she had \
never before seen a rabbit with either a waistcoat-pocket, or a watch \
to take out of it, and burning with curiosity, she ran across the \
field after it, and fortunately was just in time to see it pop down \
a large rabbit-hole under the hedge. \n\
In another moment down went Alice after it, never once considering how \
in the world she was to get out again. \n\
The rabbit-hole went straight on like a tunnel for some way, and then \
dipped suddenly down, so suddenly that Alice had not a moment to think \
about stopping herself before she found herself falling down a very deep well.\n\
Either the well was very deep, or she fell very slowly, for she had \
plenty of time as she went down to look about her and to wonder what \
was going to happen next. First, she tried to look down and make out what \
she was coming to, but it was too dark to see anything; then she looked at \
the sides of the well, and noticed that they were filled with cupboards and \
book-shelves; here and there she saw maps and pictures hung upon pegs. She \
took down a jar from one of the shelves as she passed; it was labelled \
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \
not like to drop the jar for fear of killing somebody, so managed to put it \
into one of the cupboards as she fell past it. \n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \
think nothing of tumbling down stairs! How brave they'll all think me \
at home! Why, I wouldn't say anything about it, even if I fell off the \
top of the house!' (Which was very likely true.)\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \
many miles I've fallen by this time?' she said aloud. 'I must be getting \
somewhere near the centre of the earth. Let me see: that would be four \
thousand miles down, I think—' (for, you see, Alice had learnt several \
things of this sort in her lessons in the schoolroom, and though this \
was not a VERY good opportunity for showing off her knowledge, as \
there was no one to listen to her, still it was good practice to say it \
over) '—yes, that's about the right distance—but then I wonder what \
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \
or Longitude either, but thought they were nice grand words to say.)\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \
earth! How funny it'll seem to come out among the people that walk with \
their heads downward! The Antipathies, I think—' (she was rather glad \
there WAS no one listening, this time, as it didn't sound at all the \
right word) '—but I shall have to ask them what the name of the country is, \
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \
the air! Do you think you could manage it?) 'And what an ignorant little \
girl she'll think me for asking! No, it'll never do to ask: perhaps I \
shall see it written up somewhere.' \n\
Down, down, down. There was nothing else to do, so Alice soon began \
talking again. 'Dinah'll miss me very much to-night, I should think!' \
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \
tea-time. Dinah my dear! I wish you were down here with me! There are \
no mice in the air, I'm afraid, but you might catch a bat, and that's \
very like a mouse, you know. But do cats eat bats, I wonder?' And here \
Alice began to get rather sleepy, and went on saying to herself, in a \
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \
'Do bats eat cats?' for, you see, as she couldn't answer either question, \
it didn't much matter which way she put it. She felt that she was \
dozing off, and had just begun to dream that she was walking hand \
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \
tell me the truth: did you ever eat a bat?' when suddenly, thump! \
thump! down she came upon a heap of sticks and dry leaves, and the \
fall was over.\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \
she looked up, but it was all dark overhead; before her was another \
long passage, and the White Rabbit was still in sight, hurrying down \
it. There was not a moment to be lost: away went Alice like the wind, \
and was just in time to hear it say, as it turned a corner, 'Oh my \
ears and whiskers, how late it's getting!' She was close behind it \
when she turned the corner, but the Rabbit was no longer to be seen: \
she found herself in a long, low hall, which was lit up by a row \
of lamps hanging from the roof. \n\
There were doors all round the hall, but they were all locked; \
and when Alice had been all the way down one side and up the other, \
trying every door, she walked sadly down the middle, wondering how \
she was ever to get out again.\n\
Suddenly she came upon a little three-legged table, all made of \
solid glass; there was nothing on it except a tiny golden key, and \
Alice's first thought was that it might belong to one of the doors \
of the hall; but, alas! either the locks were too large, or the \
key was too small, but at any rate it would not open any of them. \
However, on the second time round, she came upon a low curtain she \
had not noticed before, and behind it was a little door about fifteen \
inches high: she tried the little golden key in the lock, and to her \
great delight it fitted! \n\
Alice opened the door and found that it led into a small passage, not \
much larger than a rat-hole: she knelt down and looked along the \
passage into the loveliest garden you ever saw. How she longed to \
get out of that dark hall, and wander about among those beds of bright \
flowers and those cool fountains, but she could not even get her head \
through the doorway; 'and even if my head would go through,' thought \
poor Alice, 'it would be of very little use without my shoulders. Oh, \
how I wish I could shut up like a telescope! I think I could, if I \
only know how to begin.' For, you see, so many out-of-the-way things \
had happened lately, that Alice had begun to think that very few \
things indeed were really impossible. \n\
There seemed to be no use in waiting by the little door, so she went \
back to the table, half hoping she might find another key on it, or at \
any rate a book of rules for shutting people up like telescopes: this \
time she found a little bottle on it, ('which certainly was not here \
before,' said Alice,) and round the neck of the bottle was a paper \
label, with the words 'DRINK ME' beautifully printed on it in large \
letters.\n\
It was all very well to say 'Drink me,' but the wise little Alice was \
not going to do THAT in a hurry. 'No, I'll look first,' she said, \
'and see whether it's marked \"poison\" or not'; for she had read \
several nice little histories about children who had got burnt, \
and eaten up by wild beasts and other unpleasant things, all because \
they WOULD not remember the simple rules their friends had taught \
them: such as, that a red-hot poker will burn you if you hold it \
too long; and that if you cut your finger VERY deeply with a knife, \
it usually bleeds; and she had never forgotten that, if you drink \
much from a bottle marked 'poison,' it is almost certain to \
disagree with you, sooner or later. \n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \
taste it, and finding it very nice, (it had, in fact, a sort of mixed \
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \
and hot buttered toast,) she very soon finished it off.");
// var N_txt = new Item("N_txt", "INSERT SOME LONG TEXT");
// var O_txt = new Item("O_txt", "INSERT SOME LONG TEXT");
// var P_txt = new Item("P_txt", "INSERT SOME LONG TEXT");
var Q_txt = new Item("Q_txt", "Alice was beginning to get very tired of sitting by her \
sister on the bank, and of having nothing to do: once or twice she had peeped into the \
book her sister was reading, but it had no pictures or conversations in it, 'and what is \
the use of a book,' thought Alice 'without pictures or conversation?' \n\
So she was considering in her own mind (as well as she could, for the hot day \
made her feel very sleepy and stupid), whether the pleasure of making a \
daisy-chain would be worth the trouble of getting up and picking the daisies, \
when suddenly a White Rabbit with pink eyes ran close by her.\n\
There was nothing so VERY remarkable in that; nor did Alice think it \
so VERY much out of the way to hear the Rabbit say to itself, \
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \
it occurred to her that she ought to have wondered at this, but at the \
time it all seemed quite natural); but when the Rabbit actually TOOK A \
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \
Alice started to her feet, for it flashed across her mind that she had \
never before seen a rabbit with either a waistcoat-pocket, or a watch \
to take out of it, and burning with curiosity, she ran across the \
field after it, and fortunately was just in time to see it pop down \
a large rabbit-hole under the hedge. \n\
In another moment down went Alice after it, never once considering how \
in the world she was to get out again. \n\
The rabbit-hole went straight on like a tunnel for some way, and then \
dipped suddenly down, so suddenly that Alice had not a moment to think \
about stopping herself before she found herself falling down a very deep well.\n\
Either the well was very deep, or she fell very slowly, for she had \
plenty of time as she went down to look about her and to wonder what \
was going to happen next. First, she tried to look down and make out what \
she was coming to, but it was too dark to see anything; then she looked at \
the sides of the well, and noticed that they were filled with cupboards and \
book-shelves; here and there she saw maps and pictures hung upon pegs. She \
took down a jar from one of the shelves as she passed; it was labelled \
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \
not like to drop the jar for fear of killing somebody, so managed to put it \
into one of the cupboards as she fell past it. \n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \
think nothing of tumbling down stairs! How brave they'll all think me \
at home! Why, I wouldn't say anything about it, even if I fell off the \
top of the house!' (Which was very likely true.)\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \
many miles I've fallen by this time?' she said aloud. 'I must be getting \
somewhere near the centre of the earth. Let me see: that would be four \
thousand miles down, I think—' (for, you see, Alice had learnt several \
things of this sort in her lessons in the schoolroom, and though this \
was not a VERY good opportunity for showing off her knowledge, as \
there was no one to listen to her, still it was good practice to say it \
over) '—yes, that's about the right distance—but then I wonder what \
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \
or Longitude either, but thought they were nice grand words to say.)\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \
earth! How funny it'll seem to come out among the people that walk with \
their heads downward! The Antipathies, I think—' (she was rather glad \
there WAS no one listening, this time, as it didn't sound at all the \
right word) '—but I shall have to ask them what the name of the country is, \
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \
the air! Do you think you could manage it?) 'And what an ignorant little \
girl she'll think me for asking! No, it'll never do to ask: perhaps I \
shall see it written up somewhere.' \n\
Down, down, down. There was nothing else to do, so Alice soon began \
talking again. 'Dinah'll miss me very much to-night, I should think!' \
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \
tea-time. Dinah my dear! I wish you were down here with me! There are \
no mice in the air, I'm afraid, but you might catch a bat, and that's \
very like a mouse, you know. But do cats eat bats, I wonder?' And here \
Alice began to get rather sleepy, and went on saying to herself, in a \
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \
'Do bats eat cats?' for, you see, as she couldn't answer either question, \
it didn't much matter which way she put it. She felt that she was \
dozing off, and had just begun to dream that she was walking hand \
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \
tell me the truth: did you ever eat a bat?' when suddenly, thump! \
thump! down she came upon a heap of sticks and dry leaves, and the \
fall was over.\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \
she looked up, but it was all dark overhead; before her was another \
long passage, and the White Rabbit was still in sight, hurrying down \
it. There was not a moment to be lost: away went Alice like the wind, \
and was just in time to hear it say, as it turned a corner, 'Oh my \
ears and whiskers, how late it's getting!' She was close behind it \
when she turned the corner, but the Rabbit was no longer to be seen: \
she found herself in a long, low hall, which was lit up by a row \
of lamps hanging from the roof. \n\
There were doors all round the hall, but they were all locked; \
and when Alice had been all the way down one side and up the other, \
trying every door, she walked sadly down the middle, wondering how \
she was ever to get out again.\n\
Suddenly she came upon a little three-legged table, all made of \
solid glass; there was nothing on it except a tiny golden key, and \
Alice's first thought was that it might belong to one of the doors \
of the hall; but, alas! either the locks were too large, or the \
key was too small, but at any rate it would not open any of them. \
However, on the second time round, she came upon a low curtain she \
had not noticed before, and behind it was a little door about fifteen \
inches high: she tried the little golden key in the lock, and to her \
great delight it fitted! \n\
Alice opened the door and found that it led into a small passage, not \
much larger than a rat-hole: she knelt down and looked along the \
passage into the loveliest garden you ever saw. How she longed to \
get out of that dark hall, and wander about among those beds of bright \
flowers and those cool fountains, but she could not even get her head \
through the doorway; 'and even if my head would go through,' thought \
poor Alice, 'it would be of very little use without my shoulders. Oh, \
how I wish I could shut up like a telescope! I think I could, if I \
only know how to begin.' For, you see, so many out-of-the-way things \
had happened lately, that Alice had begun to think that very few \
things indeed were really impossible. \n\
There seemed to be no use in waiting by the little door, so she went \
back to the table, half hoping she might find another key on it, or at \
any rate a book of rules for shutting people up like telescopes: this \
time she found a little bottle on it, ('which certainly was not here \
before,' said Alice,) and round the neck of the bottle was a paper \
label, with the words 'DRINK ME' beautifully printed on it in large \
letters.\n\
It was all very well to say 'Drink me,' but the wise little Alice was \
not going to do THAT in a hurry. 'No, I'll look first,' she said, \
'and see whether it's marked \"poison\" or not'; for she had read \
several nice little histories about children who had got burnt, \
and eaten up by wild beasts and other unpleasant things, all because \
they WOULD not remember the simple rules their friends had taught \
them: such as, that a red-hot poker will burn you if you hold it \
too long; and that if you cut your finger VERY deeply with a knife, \
it usually bleeds; and she had never forgotten that, if you drink \
much from a bottle marked 'poison,' it is almost certain to \
disagree with you, sooner or later. \n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \
taste it, and finding it very nice, (it had, in fact, a sort of mixed \
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \
and hot buttered toast,) she very soon finished it off.");
var R_txt = new Item("R_txt", "Alice was beginning to get very tired of sitting by her \
sister on the bank, and of having nothing to do: once or twice she had peeped into the \
book her sister was reading, but it had no pictures or conversations in it, 'and what is \
the use of a book,' thought Alice 'without pictures or conversation?' \n\
So she was considering in her own mind (as well as she could, for the hot day \
made her feel very sleepy and stupid), whether the pleasure of making a \
daisy-chain would be worth the trouble of getting up and picking the daisies, \
when suddenly a White Rabbit with pink eyes ran close by her.\n\
There was nothing so VERY remarkable in that; nor did Alice think it \
so VERY much out of the way to hear the Rabbit say to itself, \
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \
it occurred to her that she ought to have wondered at this, but at the \
time it all seemed quite natural); but when the Rabbit actually TOOK A \
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \
Alice started to her feet, for it flashed across her mind that she had \
never before seen a rabbit with either a waistcoat-pocket, or a watch \
to take out of it, and burning with curiosity, she ran across the \
field after it, and fortunately was just in time to see it pop down \
a large rabbit-hole under the hedge. \n\
In another moment down went Alice after it, never once considering how \
in the world she was to get out again. \n\
The rabbit-hole went straight on like a tunnel for some way, and then \
dipped suddenly down, so suddenly that Alice had not a moment to think \
about stopping herself before she found herself falling down a very deep well.\n\
Either the well was very deep, or she fell very slowly, for she had \
plenty of time as she went down to look about her and to wonder what \
was going to happen next. First, she tried to look down and make out what \
she was coming to, but it was too dark to see anything; then she looked at \
the sides of the well, and noticed that they were filled with cupboards and \
book-shelves; here and there she saw maps and pictures hung upon pegs. She \
took down a jar from one of the shelves as she passed; it was labelled \
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \
not like to drop the jar for fear of killing somebody, so managed to put it \
into one of the cupboards as she fell past it. \n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \
think nothing of tumbling down stairs! How brave they'll all think me \
at home! Why, I wouldn't say anything about it, even if I fell off the \
top of the house!' (Which was very likely true.)\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \
many miles I've fallen by this time?' she said aloud. 'I must be getting \
somewhere near the centre of the earth. Let me see: that would be four \
thousand miles down, I think—' (for, you see, Alice had learnt several \
things of this sort in her lessons in the schoolroom, and though this \
was not a VERY good opportunity for showing off her knowledge, as \
there was no one to listen to her, still it was good practice to say it \
over) '—yes, that's about the right distance—but then I wonder what \
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \
or Longitude either, but thought they were nice grand words to say.)\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \
earth! How funny it'll seem to come out among the people that walk with \
their heads downward! The Antipathies, I think—' (she was rather glad \
there WAS no one listening, this time, as it didn't sound at all the \
right word) '—but I shall have to ask them what the name of the country is, \
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \
the air! Do you think you could manage it?) 'And what an ignorant little \
girl she'll think me for asking! No, it'll never do to ask: perhaps I \
shall see it written up somewhere.' \n\
Down, down, down. There was nothing else to do, so Alice soon began \
talking again. 'Dinah'll miss me very much to-night, I should think!' \
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \
tea-time. Dinah my dear! I wish you were down here with me! There are \
no mice in the air, I'm afraid, but you might catch a bat, and that's \
very like a mouse, you know. But do cats eat bats, I wonder?' And here \
Alice began to get rather sleepy, and went on saying to herself, in a \
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \
'Do bats eat cats?' for, you see, as she couldn't answer either question, \
it didn't much matter which way she put it. She felt that she was \
dozing off, and had just begun to dream that she was walking hand \
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \
tell me the truth: did you ever eat a bat?' when suddenly, thump! \
thump! down she came upon a heap of sticks and dry leaves, and the \
fall was over.\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \
she looked up, but it was all dark overhead; before her was another \
long passage, and the White Rabbit was still in sight, hurrying down \
it. There was not a moment to be lost: away went Alice like the wind, \
and was just in time to hear it say, as it turned a corner, 'Oh my \
ears and whiskers, how late it's getting!' She was close behind it \
when she turned the corner, but the Rabbit was no longer to be seen: \
she found herself in a long, low hall, which was lit up by a row \
of lamps hanging from the roof. \n\
There were doors all round the hall, but they were all locked; \
and when Alice had been all the way down one side and up the other, \
trying every door, she walked sadly down the middle, wondering how \
she was ever to get out again.\n\
Suddenly she came upon a little three-legged table, all made of \
solid glass; there was nothing on it except a tiny golden key, and \
Alice's first thought was that it might belong to one of the doors \
of the hall; but, alas! either the locks were too large, or the \
key was too small, but at any rate it would not open any of them. \
However, on the second time round, she came upon a low curtain she \
had not noticed before, and behind it was a little door about fifteen \
inches high: she tried the little golden key in the lock, and to her \
great delight it fitted! \n\
Alice opened the door and found that it led into a small passage, not \
much larger than a rat-hole: she knelt down and looked along the \
passage into the loveliest garden you ever saw. How she longed to \
get out of that dark hall, and wander about among those beds of bright \
flowers and those cool fountains, but she could not even get her head \
through the doorway; 'and even if my head would go through,' thought \
poor Alice, 'it would be of very little use without my shoulders. Oh, \
how I wish I could shut up like a telescope! I think I could, if I \
only know how to begin.' For, you see, so many out-of-the-way things \
had happened lately, that Alice had begun to think that very few \
things indeed were really impossible. \n\
There seemed to be no use in waiting by the little door, so she went \
back to the table, half hoping she might find another key on it, or at \
any rate a book of rules for shutting people up like telescopes: this \
time she found a little bottle on it, ('which certainly was not here \
before,' said Alice,) and round the neck of the bottle was a paper \
label, with the words 'DRINK ME' beautifully printed on it in large \
letters.\n\
It was all very well to say 'Drink me,' but the wise little Alice was \
not going to do THAT in a hurry. 'No, I'll look first,' she said, \
'and see whether it's marked \"poison\" or not'; for she had read \
several nice little histories about children who had got burnt, \
and eaten up by wild beasts and other unpleasant things, all because \
they WOULD not remember the simple rules their friends had taught \
them: such as, that a red-hot poker will burn you if you hold it \
too long; and that if you cut your finger VERY deeply with a knife, \
it usually bleeds; and she had never forgotten that, if you drink \
much from a bottle marked 'poison,' it is almost certain to \
disagree with you, sooner or later. \n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \
taste it, and finding it very nice, (it had, in fact, a sort of mixed \
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \
and hot buttered toast,) she very soon finished it off.");
var S_txt = new Item("S_txt", "Alice was beginning to get very tired of sitting by her \
sister on the bank, and of having nothing to do: once or twice she had peeped into the \
book her sister was reading, but it had no pictures or conversations in it, 'and what is \
the use of a book,' thought Alice 'without pictures or conversation?' \n\
So she was considering in her own mind (as well as she could, for the hot day \
made her feel very sleepy and stupid), whether the pleasure of making a \
daisy-chain would be worth the trouble of getting up and picking the daisies, \
when suddenly a White Rabbit with pink eyes ran close by her.\n\
There was nothing so VERY remarkable in that; nor did Alice think it \
so VERY much out of the way to hear the Rabbit say to itself, \
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \
it occurred to her that she ought to have wondered at this, but at the \
time it all seemed quite natural); but when the Rabbit actually TOOK A \
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \
Alice started to her feet, for it flashed across her mind that she had \
never before seen a rabbit with either a waistcoat-pocket, or a watch \
to take out of it, and burning with curiosity, she ran across the \
field after it, and fortunately was just in time to see it pop down \
a large rabbit-hole under the hedge. \n\
In another moment down went Alice after it, never once considering how \
in the world she was to get out again. \n\
The rabbit-hole went straight on like a tunnel for some way, and then \
dipped suddenly down, so suddenly that Alice had not a moment to think \
about stopping herself before she found herself falling down a very deep well.\n\
Either the well was very deep, or she fell very slowly, for she had \
plenty of time as she went down to look about her and to wonder what \
was going to happen next. First, she tried to look down and make out what \
she was coming to, but it was too dark to see anything; then she looked at \
the sides of the well, and noticed that they were filled with cupboards and \
book-shelves; here and there she saw maps and pictures hung upon pegs. She \
took down a jar from one of the shelves as she passed; it was labelled \
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \
not like to drop the jar for fear of killing somebody, so managed to put it \
into one of the cupboards as she fell past it. \n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \
think nothing of tumbling down stairs! How brave they'll all think me \
at home! Why, I wouldn't say anything about it, even if I fell off the \
top of the house!' (Which was very likely true.)\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \
many miles I've fallen by this time?' she said aloud. 'I must be getting \
somewhere near the centre of the earth. Let me see: that would be four \
thousand miles down, I think—' (for, you see, Alice had learnt several \
things of this sort in her lessons in the schoolroom, and though this \
was not a VERY good opportunity for showing off her knowledge, as \
there was no one to listen to her, still it was good practice to say it \
over) '—yes, that's about the right distance—but then I wonder what \
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \
or Longitude either, but thought they were nice grand words to say.)\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \
earth! How funny it'll seem to come out among the people that walk with \
their heads downward! The Antipathies, I think—' (she was rather glad \
there WAS no one listening, this time, as it didn't sound at all the \
right word) '—but I shall have to ask them what the name of the country is, \
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \
the air! Do you think you could manage it?) 'And what an ignorant little \
girl she'll think me for asking! No, it'll never do to ask: perhaps I \
shall see it written up somewhere.' \n\
Down, down, down. There was nothing else to do, so Alice soon began \
talking again. 'Dinah'll miss me very much to-night, I should think!' \
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \
tea-time. Dinah my dear! I wish you were down here with me! There are \
no mice in the air, I'm afraid, but you might catch a bat, and that's \
very like a mouse, you know. But do cats eat bats, I wonder?' And here \
Alice began to get rather sleepy, and went on saying to herself, in a \
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \
'Do bats eat cats?' for, you see, as she couldn't answer either question, \
it didn't much matter which way she put it. She felt that she was \
dozing off, and had just begun to dream that she was walking hand \
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \
tell me the truth: did you ever eat a bat?' when suddenly, thump! \
thump! down she came upon a heap of sticks and dry leaves, and the \
fall was over.\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \
she looked up, but it was all dark overhead; before her was another \
long passage, and the White Rabbit was still in sight, hurrying down \
it. There was not a moment to be lost: away went Alice like the wind, \
and was just in time to hear it say, as it turned a corner, 'Oh my \
ears and whiskers, how late it's getting!' She was close behind it \
when she turned the corner, but the Rabbit was no longer to be seen: \
she found herself in a long, low hall, which was lit up by a row \
of lamps hanging from the roof. \n\
There were doors all round the hall, but they were all locked; \
and when Alice had been all the way down one side and up the other, \
trying every door, she walked sadly down the middle, wondering how \
she was ever to get out again.\n\
Suddenly she came upon a little three-legged table, all made of \
solid glass; there was nothing on it except a tiny golden key, and \
Alice's first thought was that it might belong to one of the doors \
of the hall; but, alas! either the locks were too large, or the \
key was too small, but at any rate it would not open any of them. \
However, on the second time round, she came upon a low curtain she \
had not noticed before, and behind it was a little door about fifteen \
inches high: she tried the little golden key in the lock, and to her \
great delight it fitted! \n\
Alice opened the door and found that it led into a small passage, not \
much larger than a rat-hole: she knelt down and looked along the \
passage into the loveliest garden you ever saw. How she longed to \
get out of that dark hall, and wander about among those beds of bright \
flowers and those cool fountains, but she could not even get her head \
through the doorway; 'and even if my head would go through,' thought \
poor Alice, 'it would be of very little use without my shoulders. Oh, \
how I wish I could shut up like a telescope! I think I could, if I \
only know how to begin.' For, you see, so many out-of-the-way things \
had happened lately, that Alice had begun to think that very few \
things indeed were really impossible. \n\
There seemed to be no use in waiting by the little door, so she went \
back to the table, half hoping she might find another key on it, or at \
any rate a book of rules for shutting people up like telescopes: this \
time she found a little bottle on it, ('which certainly was not here \
before,' said Alice,) and round the neck of the bottle was a paper \
label, with the words 'DRINK ME' beautifully printed on it in large \
letters.\n\
It was all very well to say 'Drink me,' but the wise little Alice was \
not going to do THAT in a hurry. 'No, I'll look first,' she said, \
'and see whether it's marked \"poison\" or not'; for she had read \
several nice little histories about children who had got burnt, \
and eaten up by wild beasts and other unpleasant things, all because \
they WOULD not remember the simple rules their friends had taught \
them: such as, that a red-hot poker will burn you if you hold it \
too long; and that if you cut your finger VERY deeply with a knife, \
it usually bleeds; and she had never forgotten that, if you drink \
much from a bottle marked 'poison,' it is almost certain to \
disagree with you, sooner or later. \n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \
taste it, and finding it very nice, (it had, in fact, a sort of mixed \
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \
and hot buttered toast,) she very soon finished it off.");
var T_txt = new Item("T_txt", "Alice was beginning to get very tired of sitting by her \
sister on the bank, and of having nothing to do: once or twice she had peeped into the \
book her sister was reading, but it had no pictures or conversations in it, 'and what is \
the use of a book,' thought Alice 'without pictures or conversation?' \n\
So she was considering in her own mind (as well as she could, for the hot day \
made her feel very sleepy and stupid), whether the pleasure of making a \
daisy-chain would be worth the trouble of getting up and picking the daisies, \
when suddenly a White Rabbit with pink eyes ran close by her.\n\
There was nothing so VERY remarkable in that; nor did Alice think it \
so VERY much out of the way to hear the Rabbit say to itself, \
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \
it occurred to her that she ought to have wondered at this, but at the \
time it all seemed quite natural); but when the Rabbit actually TOOK A \
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \
Alice started to her feet, for it flashed across her mind that she had \
never before seen a rabbit with either a waistcoat-pocket, or a watch \
to take out of it, and burning with curiosity, she ran across the \
field after it, and fortunately was just in time to see it pop down \
a large rabbit-hole under the hedge. \n\
In another moment down went Alice after it, never once considering how \
in the world she was to get out again. \n\
The rabbit-hole went straight on like a tunnel for some way, and then \
dipped suddenly down, so suddenly that Alice had not a moment to think \
about stopping herself before she found herself falling down a very deep well.\n\
Either the well was very deep, or she fell very slowly, for she had \
plenty of time as she went down to look about her and to wonder what \
was going to happen next. First, she tried to look down and make out what \
she was coming to, but it was too dark to see anything; then she looked at \
the sides of the well, and noticed that they were filled with cupboards and \
book-shelves; here and there she saw maps and pictures hung upon pegs. She \
took down a jar from one of the shelves as she passed; it was labelled \
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \
not like to drop the jar for fear of killing somebody, so managed to put it \
into one of the cupboards as she fell past it. \n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \
think nothing of tumbling down stairs! How brave they'll all think me \
at home! Why, I wouldn't say anything about it, even if I fell off the \
top of the house!' (Which was very likely true.)\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \
many miles I've fallen by this time?' she said aloud. 'I must be getting \
somewhere near the centre of the earth. Let me see: that would be four \
thousand miles down, I think—' (for, you see, Alice had learnt several \
things of this sort in her lessons in the schoolroom, and though this \
was not a VERY good opportunity for showing off her knowledge, as \
there was no one to listen to her, still it was good practice to say it \
over) '—yes, that's about the right distance—but then I wonder what \
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \
or Longitude either, but thought they were nice grand words to say.)\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \
earth! How funny it'll seem to come out among the people that walk with \
their heads downward! The Antipathies, I think—' (she was rather glad \
there WAS no one listening, this time, as it didn't sound at all the \
right word) '—but I shall have to ask them what the name of the country is, \
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \
the air! Do you think you could manage it?) 'And what an ignorant little \
girl she'll think me for asking! No, it'll never do to ask: perhaps I \
shall see it written up somewhere.' \n\
Down, down, down. There was nothing else to do, so Alice soon began \
talking again. 'Dinah'll miss me very much to-night, I should think!' \
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \
tea-time. Dinah my dear! I wish you were down here with me! There are \
no mice in the air, I'm afraid, but you might catch a bat, and that's \
very like a mouse, you know. But do cats eat bats, I wonder?' And here \
Alice began to get rather sleepy, and went on saying to herself, in a \
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \
'Do bats eat cats?' for, you see, as she couldn't answer either question, \
it didn't much matter which way she put it. She felt that she was \
dozing off, and had just begun to dream that she was walking hand \
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \
tell me the truth: did you ever eat a bat?' when suddenly, thump! \
thump! down she came upon a heap of sticks and dry leaves, and the \
fall was over.\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \
she looked up, but it was all dark overhead; before her was another \
long passage, and the White Rabbit was still in sight, hurrying down \
it. There was not a moment to be lost: away went Alice like the wind, \
and was just in time to hear it say, as it turned a corner, 'Oh my \
ears and whiskers, how late it's getting!' She was close behind it \
when she turned the corner, but the Rabbit was no longer to be seen: \
she found herself in a long, low hall, which was lit up by a row \
of lamps hanging from the roof. \n\
There were doors all round the hall, but they were all locked; \
and when Alice had been all the way down one side and up the other, \
trying every door, she walked sadly down the middle, wondering how \
she was ever to get out again.\n\
Suddenly she came upon a little three-legged table, all made of \
solid glass; there was nothing on it except a tiny golden key, and \
Alice's first thought was that it might belong to one of the doors \
of the hall; but, alas! either the locks were too large, or the \
key was too small, but at any rate it would not open any of them. \
However, on the second time round, she came upon a low curtain she \
had not noticed before, and behind it was a little door about fifteen \
inches high: she tried the little golden key in the lock, and to her \
great delight it fitted! \n\
Alice opened the door and found that it led into a small passage, not \
much larger than a rat-hole: she knelt down and looked along the \
passage into the loveliest garden you ever saw. How she longed to \
get out of that dark hall, and wander about among those beds of bright \
flowers and those cool fountains, but she could not even get her head \
through the doorway; 'and even if my head would go through,' thought \
poor Alice, 'it would be of very little use without my shoulders. Oh, \
how I wish I could shut up like a telescope! I think I could, if I \
only know how to begin.' For, you see, so many out-of-the-way things \
had happened lately, that Alice had begun to think that very few \
things indeed were really impossible. \n\
There seemed to be no use in waiting by the little door, so she went \
back to the table, half hoping she might find another key on it, or at \
any rate a book of rules for shutting people up like telescopes: this \
time she found a little bottle on it, ('which certainly was not here \
before,' said Alice,) and round the neck of the bottle was a paper \
label, with the words 'DRINK ME' beautifully printed on it in large \
letters.\n\
It was all very well to say 'Drink me,' but the wise little Alice was \
not going to do THAT in a hurry. 'No, I'll look first,' she said, \
'and see whether it's marked \"poison\" or not'; for she had read \
several nice little histories about children who had got burnt, \
and eaten up by wild beasts and other unpleasant things, all because \
they WOULD not remember the simple rules their friends had taught \
them: such as, that a red-hot poker will burn you if you hold it \
too long; and that if you cut your finger VERY deeply with a knife, \
it usually bleeds; and she had never forgotten that, if you drink \
much from a bottle marked 'poison,' it is almost certain to \
disagree with you, sooner or later. \n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \
taste it, and finding it very nice, (it had, in fact, a sort of mixed \
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \
and hot buttered toast,) she very soon finished it off.");
var U_txt = new Item("U_txt", "Alice was beginning to get very tired of sitting by her \
sister on the bank, and of having nothing to do: once or twice she had peeped into the \
book her sister was reading, but it had no pictures or conversations in it, 'and what is \
the use of a book,' thought Alice 'without pictures or conversation?' \n\
So she was considering in her own mind (as well as she could, for the hot day \
made her feel very sleepy and stupid), whether the pleasure of making a \
daisy-chain would be worth the trouble of getting up and picking the daisies, \
when suddenly a White Rabbit with pink eyes ran close by her.\n\
There was nothing so VERY remarkable in that; nor did Alice think it \
so VERY much out of the way to hear the Rabbit say to itself, \
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \
it occurred to her that she ought to have wondered at this, but at the \
time it all seemed quite natural); but when the Rabbit actually TOOK A \
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \
Alice started to her feet, for it flashed across her mind that she had \
never before seen a rabbit with either a waistcoat-pocket, or a watch \
to take out of it, and burning with curiosity, she ran across the \
field after it, and fortunately was just in time to see it pop down \
a large rabbit-hole under the hedge. \n\
In another moment down went Alice after it, never once considering how \
in the world she was to get out again. \n\
The rabbit-hole went straight on like a tunnel for some way, and then \
dipped suddenly down, so suddenly that Alice had not a moment to think \
about stopping herself before she found herself falling down a very deep well.\n\
Either the well was very deep, or she fell very slowly, for she had \
plenty of time as she went down to look about her and to wonder what \
was going to happen next. First, she tried to look down and make out what \
she was coming to, but it was too dark to see anything; then she looked at \
the sides of the well, and noticed that they were filled with cupboards and \
book-shelves; here and there she saw maps and pictures hung upon pegs. She \
took down a jar from one of the shelves as she passed; it was labelled \
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \
not like to drop the jar for fear of killing somebody, so managed to put it \
into one of the cupboards as she fell past it. \n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \
think nothing of tumbling down stairs! How brave they'll all think me \
at home! Why, I wouldn't say anything about it, even if I fell off the \
top of the house!' (Which was very likely true.)\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \
many miles I've fallen by this time?' she said aloud. 'I must be getting \
somewhere near the centre of the earth. Let me see: that would be four \
thousand miles down, I think—' (for, you see, Alice had learnt several \
things of this sort in her lessons in the schoolroom, and though this \
was not a VERY good opportunity for showing off her knowledge, as \
there was no one to listen to her, still it was good practice to say it \
over) '—yes, that's about the right distance—but then I wonder what \
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \
or Longitude either, but thought they were nice grand words to say.)\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \
earth! How funny it'll seem to come out among the people that walk with \
their heads downward! The Antipathies, I think—' (she was rather glad \
there WAS no one listening, this time, as it didn't sound at all the \
right word) '—but I shall have to ask them what the name of the country is, \
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \
the air! Do you think you could manage it?) 'And what an ignorant little \
girl she'll think me for asking! No, it'll never do to ask: perhaps I \
shall see it written up somewhere.' \n\
Down, down, down. There was nothing else to do, so Alice soon began \
talking again. 'Dinah'll miss me very much to-night, I should think!' \
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \
tea-time. Dinah my dear! I wish you were down here with me! There are \
no mice in the air, I'm afraid, but you might catch a bat, and that's \
very like a mouse, you know. But do cats eat bats, I wonder?' And here \
Alice began to get rather sleepy, and went on saying to herself, in a \
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \
'Do bats eat cats?' for, you see, as she couldn't answer either question, \
it didn't much matter which way she put it. She felt that she was \
dozing off, and had just begun to dream that she was walking hand \
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \
tell me the truth: did you ever eat a bat?' when suddenly, thump! \
thump! down she came upon a heap of sticks and dry leaves, and the \
fall was over.\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \
she looked up, but it was all dark overhead; before her was another \
long passage, and the White Rabbit was still in sight, hurrying down \
it. There was not a moment to be lost: away went Alice like the wind, \
and was just in time to hear it say, as it turned a corner, 'Oh my \
ears and whiskers, how late it's getting!' She was close behind it \
when she turned the corner, but the Rabbit was no longer to be seen: \
she found herself in a long, low hall, which was lit up by a row \
of lamps hanging from the roof. \n\
There were doors all round the hall, but they were all locked; \
and when Alice had been all the way down one side and up the other, \
trying every door, she walked sadly down the middle, wondering how \
she was ever to get out again.\n\
Suddenly she came upon a little three-legged table, all made of \
solid glass; there was nothing on it except a tiny golden key, and \
Alice's first thought was that it might belong to one of the doors \
of the hall; but, alas! either the locks were too large, or the \
key was too small, but at any rate it would not open any of them. \
However, on the second time round, she came upon a low curtain she \
had not noticed before, and behind it was a little door about fifteen \
inches high: she tried the little golden key in the lock, and to her \
great delight it fitted! \n\
Alice opened the door and found that it led into a small passage, not \
much larger than a rat-hole: she knelt down and looked along the \
passage into the loveliest garden you ever saw. How she longed to \
get out of that dark hall, and wander about among those beds of bright \
flowers and those cool fountains, but she could not even get her head \
through the doorway; 'and even if my head would go through,' thought \
poor Alice, 'it would be of very little use without my shoulders. Oh, \
how I wish I could shut up like a telescope! I think I could, if I \
only know how to begin.' For, you see, so many out-of-the-way things \
had happened lately, that Alice had begun to think that very few \
things indeed were really impossible. \n\
There seemed to be no use in waiting by the little door, so she went \
back to the table, half hoping she might find password=IHTFP another key on it, or at \
any rate a book of rules for shutting people up like telescopes: this \
time she found a little bottle on it, ('which certainly was not here \
before,' said Alice,) and round the neck of the bottle was a paper \
label, with the words 'DRINK ME' beautifully printed on it in large \
letters.\n\
It was all very well to say 'Drink me,' but the wise little Alice was \
not going to do THAT in a hurry. 'No, I'll look first,' she said, \
'and see whether it's marked \"poison\" or not'; for she had read \
several nice little histories about children who had got burnt, \
and eaten up by wild beasts and other unpleasant things, all because \
they WOULD not remember the simple rules their friends had taught \
them: such as, that a red-hot poker will burn you if you hold it \
too long; and that if you cut your finger VERY deeply with a knife, \
it usually bleeds; and she had never forgotten that, if you drink \
much from a bottle marked 'poison,' it is almost certain to \
disagree with you, sooner or later. \n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \
taste it, and finding it very nice, (it had, in fact, a sort of mixed \
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \
and hot buttered toast,) she very soon finished it off.");
var V_txt = new Item("V_txt", "Alice was beginning to get very tired of sitting by her \
sister on the bank, and of having nothing to do: once or twice she had peeped into the \
book her sister was reading, but it had no pictures or conversations in it, 'and what is \
the use of a book,' thought Alice 'without pictures or conversation?' \n\
So she was considering in her own mind (as well as she could, for the hot day \
made her feel very sleepy and stupid), whether the pleasure of making a \
daisy-chain would be worth the trouble of getting up and picking the daisies, \
when suddenly a White Rabbit with pink eyes ran close by her.\n\
There was nothing so VERY remarkable in that; nor did Alice think it \
so VERY much out of the way to hear the Rabbit say to itself, \
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \
it occurred to her that she ought to have wondered at this, but at the \
time it all seemed quite natural); but when the Rabbit actually TOOK A \
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \
Alice started to her feet, for it flashed across her mind that she had \
never before seen a rabbit with either a waistcoat-pocket, or a watch \
to take out of it, and burning with curiosity, she ran across the \
field after it, and fortunately was just in time to see it pop down \
a large rabbit-hole under the hedge. \n\
In another moment down went Alice after it, never once considering how \
in the world she was to get out again. \n\
The rabbit-hole went straight on like a tunnel for some way, and then \
dipped suddenly down, so suddenly that Alice had not a moment to think \
about stopping herself before she found herself falling down a very deep well.\n\
Either the well was very deep, or she fell very slowly, for she had \
plenty of time as she went down to look about her and to wonder what \
was going to happen next. First, she tried to look down and make out what \
she was coming to, but it was too dark to see anything; then she looked at \
the sides of the well, and noticed that they were filled with cupboards and \
book-shelves; here and there she saw maps and pictures hung upon pegs. She \
took down a jar from one of the shelves as she passed; it was labelled \
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \
not like to drop the jar for fear of killing somebody, so managed to put it \
into one of the cupboards as she fell past it. \n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \
think nothing of tumbling down stairs! How brave they'll all think me \
at home! Why, I wouldn't say anything about it, even if I fell off the \
top of the house!' (Which was very likely true.)\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \
many miles I've fallen by this time?' she said aloud. 'I must be getting \
somewhere near the centre of the earth. Let me see: that would be four \
thousand miles down, I think—' (for, you see, Alice had learnt several \
things of this sort in her lessons in the schoolroom, and though this \
was not a VERY good opportunity for showing off her knowledge, as \
there was no one to listen to her, still it was good practice to say it \
over) '—yes, that's about the right distance—but then I wonder what \
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \
or Longitude either, but thought they were nice grand words to say.)\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \
earth! How funny it'll seem to come out among the people that walk with \
their heads downward! The Antipathies, I think—' (she was rather glad \
there WAS no one listening, this time, as it didn't sound at all the \
right word) '—but I shall have to ask them what the name of the country is, \
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \
the air! Do you think you could manage it?) 'And what an ignorant little \
girl she'll think me for asking! No, it'll never do to ask: perhaps I \
shall see it written up somewhere.' \n\
Down, down, down. There was nothing else to do, so Alice soon began \
talking again. 'Dinah'll miss me very much to-night, I should think!' \
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \
tea-time. Dinah my dear! I wish you were down here with me! There are \
no mice in the air, I'm afraid, but you might catch a bat, and that's \
very like a mouse, you know. But do cats eat bats, I wonder?' And here \
Alice began to get rather sleepy, and went on saying to herself, in a \
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \
'Do bats eat cats?' for, you see, as she couldn't answer either question, \
it didn't much matter which way she put it. She felt that she was \
dozing off, and had just begun to dream that she was walking hand \
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \
tell me the truth: did you ever eat a bat?' when suddenly, thump! \
thump! down she came upon a heap of sticks and dry leaves, and the \
fall was over.\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \
she looked up, but it was all dark overhead; before her was another \
long passage, and the White Rabbit was still in sight, hurrying down \
it. There was not a moment to be lost: away went Alice like the wind, \
and was just in time to hear it say, as it turned a corner, 'Oh my \
ears and whiskers, how late it's getting!' She was close behind it \
when she turned the corner, but the Rabbit was no longer to be seen: \
she found herself in a long, low hall, which was lit up by a row \
of lamps hanging from the roof. \n\
There were doors all round the hall, but they were all locked; \
and when Alice had been all the way down one side and up the other, \
trying every door, she walked sadly down the middle, wondering how \
she was ever to get out again.\n\
Suddenly she came upon a little three-legged table, all made of \
solid glass; there was nothing on it except a tiny golden key, and \
Alice's first thought was that it might belong to one of the doors \
of the hall; but, alas! either the locks were too large, or the \
key was too small, but at any rate it would not open any of them. \
However, on the second time round, she came upon a low curtain she \
had not noticed before, and behind it was a little door about fifteen \
inches high: she tried the little golden key in the lock, and to her \
great delight it fitted! \n\
Alice opened the door and found that it led into a small passage, not \
much larger than a rat-hole: she knelt down and looked along the \
passage into the loveliest garden you ever saw. How she longed to \
get out of that dark hall, and wander about among those beds of bright \
flowers and those cool fountains, but she could not even get her head \
through the doorway; 'and even if my head would go through,' thought \
poor Alice, 'it would be of very little use without my shoulders. Oh, \
how I wish I could shut up like a telescope! I think I could, if I \
only know how to begin.' For, you see, so many out-of-the-way things \
had happened lately, that Alice had begun to think that very few \
things indeed were really impossible. \n\
There seemed to be no use in waiting by the little door, so she went \
back to the table, half hoping she might find another key on it, or at \
any rate a book of rules for shutting people up like telescopes: this \
time she found a little bottle on it, ('which certainly was not here \
before,' said Alice,) and round the neck of the bottle was a paper \
label, with the words 'DRINK ME' beautifully printed on it in large \
letters.\n\
It was all very well to say 'Drink me,' but the wise little Alice was \
not going to do THAT in a hurry. 'No, I'll look first,' she said, \
'and see whether it's marked \"poison\" or not'; for she had read \
several nice little histories about children who had got burnt, \
and eaten up by wild beasts and other unpleasant things, all because \
they WOULD not remember the simple rules their friends had taught \
them: such as, that a red-hot poker will burn you if you hold it \
too long; and that if you cut your finger VERY deeply with a knife, \
it usually bleeds; and she had never forgotten that, if you drink \
much from a bottle marked 'poison,' it is almost certain to \
disagree with you, sooner or later. \n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \
taste it, and finding it very nice, (it had, in fact, a sort of mixed \
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \
and hot buttered toast,) she very soon finished it off.");
var W_txt = new Item("W_txt", "Alice was beginning to get very tired of sitting by her \
sister on the bank, and of having nothing to do: once or twice she had peeped into the \
book her sister was reading, but it had no pictures or conversations in it, 'and what is \
the use of a book,' thought Alice 'without pictures or conversation?' \n\
So she was considering in her own mind (as well as she could, for the hot day \
made her feel very sleepy and stupid), whether the pleasure of making a \
daisy-chain would be worth the trouble of getting up and picking the daisies, \
when suddenly a White Rabbit with pink eyes ran close by her.\n\
There was nothing so VERY remarkable in that; nor did Alice think it \
so VERY much out of the way to hear the Rabbit say to itself, \
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \
it occurred to her that she ought to have wondered at this, but at the \
time it all seemed quite natural); but when the Rabbit actually TOOK A \
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \
Alice started to her feet, for it flashed across her mind that she had \
never before seen a rabbit with either a waistcoat-pocket, or a watch \
to take out of it, and burning with curiosity, she ran across the \
field after it, and fortunately was just in time to see it pop down \
a large rabbit-hole under the hedge. \n\
In another moment down went Alice after it, never once considering how \
in the world she was to get out again. \n\
The rabbit-hole went straight on like a tunnel for some way, and then \
dipped suddenly down, so suddenly that Alice had not a moment to think \
about stopping herself before she found herself falling down a very deep well.\n\
Either the well was very deep, or she fell very slowly, for she had \
plenty of time as she went down to look about her and to wonder what \
was going to happen next. First, she tried to look down and make out what \
she was coming to, but it was too dark to see anything; then she looked at \
the sides of the well, and noticed that they were filled with cupboards and \
book-shelves; here and there she saw maps and pictures hung upon pegs. She \
took down a jar from one of the shelves as she passed; it was labelled \
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \
not like to drop the jar for fear of killing somebody, so managed to put it \
into one of the cupboards as she fell past it. \n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \
think nothing of tumbling down stairs! How brave they'll all think me \
at home! Why, I wouldn't say anything about it, even if I fell off the \
top of the house!' (Which was very likely true.)\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \
many miles I've fallen by this time?' she said aloud. 'I must be getting \
somewhere near the centre of the earth. Let me see: that would be four \
thousand miles down, I think—' (for, you see, Alice had learnt several \
things of this sort in her lessons in the schoolroom, and though this \
was not a VERY good opportunity for showing off her knowledge, as \
there was no one to listen to her, still it was good practice to say it \
over) '—yes, that's about the right distance—but then I wonder what \
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \
or Longitude either, but thought they were nice grand words to say.)\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \
earth! How funny it'll seem to come out among the people that walk with \
their heads downward! The Antipathies, I think—' (she was rather glad \
there WAS no one listening, this time, as it didn't sound at all the \
right word) '—but I shall have to ask them what the name of the country is, \
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \
the air! Do you think you could manage it?) 'And what an ignorant little \
girl she'll think me for asking! No, it'll never do to ask: perhaps I \
shall see it written up somewhere.' \n\
Down, down, down. There was nothing else to do, so Alice soon began \
talking again. 'Dinah'll miss me very much to-night, I should think!' \
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \
tea-time. Dinah my dear! I wish you were down here with me! There are \
no mice in the air, I'm afraid, but you might catch a bat, and that's \
very like a mouse, you know. But do cats eat bats, I wonder?' And here \
Alice began to get rather sleepy, and went on saying to herself, in a \
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \
'Do bats eat cats?' for, you see, as she couldn't answer either question, \
it didn't much matter which way she put it. She felt that she was \
dozing off, and had just begun to dream that she was walking hand \
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \
tell me the truth: did you ever eat a bat?' when suddenly, thump! \
thump! down she came upon a heap of sticks and dry leaves, and the \
fall was over.\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \
she looked up, but it was all dark overhead; before her was another \
long passage, and the White Rabbit was still in sight, hurrying down \
it. There was not a moment to be lost: away went Alice like the wind, \
and was just in time to hear it say, as it turned a corner, 'Oh my \
ears and whiskers, how late it's getting!' She was close behind it \
when she turned the corner, but the Rabbit was no longer to be seen: \
she found herself in a long, low hall, which was lit up by a row \
of lamps hanging from the roof. \n\
There were doors all round the hall, but they were all locked; \
and when Alice had been all the way down one side and up the other, \
trying every door, she walked sadly down the middle, wondering how \
she was ever to get out again.\n\
Suddenly she came upon a little three-legged table, all made of \
solid glass; there was nothing on it except a tiny golden key, and \
Alice's first thought was that it might belong to one of the doors \
of the hall; but, alas! either the locks were too large, or the \
key was too small, but at any rate it would not open any of them. \
However, on the second time round, she came upon a low curtain she \
had not noticed before, and behind it was a little door about fifteen \
inches high: she tried the little golden key in the lock, and to her \
great delight it fitted! \n\
Alice opened the door and found that it led into a small passage, not \
much larger than a rat-hole: she knelt down and looked along the \
passage into the loveliest garden you ever saw. How she longed to \
get out of that dark hall, and wander about among those beds of bright \
flowers and those cool fountains, but she could not even get her head \
through the doorway; 'and even if my head would go through,' thought \
poor Alice, 'it would be of very little use without my shoulders. Oh, \
how I wish I could shut up like a telescope! I think I could, if I \
only know how to begin.' For, you see, so many out-of-the-way things \
had happened lately, that Alice had begun to think that very few \
things indeed were really impossible. \n\
There seemed to be no use in waiting by the little door, so she went \
back to the table, half hoping she might find another key on it, or at \
any rate a book of rules for shutting people up like telescopes: this \
time she found a little bottle on it, ('which certainly was not here \
before,' said Alice,) and round the neck of the bottle was a paper \
label, with the words 'DRINK ME' beautifully printed on it in large \
letters.\n\
It was all very well to say 'Drink me,' but the wise little Alice was \
not going to do THAT in a hurry. 'No, I'll look first,' she said, \
'and see whether it's marked \"poison\" or not'; for she had read \
several nice little histories about children who had got burnt, \
and eaten up by wild beasts and other unpleasant things, all because \
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \
too long; and that if you cut your finger VERY deeply with a knife, \
it usually bleeds; and she had never forgotten that, if you drink \
much from a bottle marked 'poison,' it is almost certain to \
disagree with you, sooner or later. \n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \
taste it, and finding it very nice, (it had, in fact, a sort of mixed \
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \
and hot buttered toast,) she very soon finished it off.");
// var X_txt = new Item("X_txt", "INSERT SOME LONG TEXT");
// var Y_txt = new Item("Y_txt", "INSERT SOME LONG TEXT");
// var Z_txt = new Item("Z_txt", "INSERT SOME LONG TEXT");
// var AA_txt = new Item("AA_txt", "INSERT SOME LONG TEXT");
// var BB_txt = new Item("BB_txt", "INSERT SOME LONG TEXT");
// var CC_txt = new Item("CC_txt", "INSERT SOME LONG TEXT");
// var DD_txt = new Item("DD_txt", "INSERT SOME LONG TEXT");
// var EE_txt = new Item("EE_txt", "INSERT SOME LONG TEXT");
// var FF_txt = new Item("FF_txt", "INSERT SOME LONG TEXT");
var MoreKernelFiles = new Room("MoreKernelFiles", "There are so many files here!");
MoreKernelFiles.addItem(L_txt);
MoreKernelFiles.addItem(M_txt);
// MoreKernelFiles.addItem(N_txt);
// MoreKernelFiles.addItem(O_txt);
// MoreKernelFiles.addItem(P_txt);
MoreKernelFiles.addItem(Q_txt);
MoreKernelFiles.addItem(R_txt);
MoreKernelFiles.addItem(S_txt);
MoreKernelFiles.addItem(T_txt);
MoreKernelFiles.addItem(U_txt);
MoreKernelFiles.addItem(V_txt);
MoreKernelFiles.addItem(W_txt);
// MoreKernelFiles.addItem(X_txt);
// MoreKernelFiles.addItem(Y_txt);
// MoreKernelFiles.addItem(Z_txt);
// MoreKernelFiles.addItem(AA_txt);
// MoreKernelFiles.addItem(BB_txt);
// MoreKernelFiles.addItem(CC_txt);
// MoreKernelFiles.addItem(DD_txt);
// MoreKernelFiles.addItem(EE_txt);
// MoreKernelFiles.addItem(FF_txt);
KernelFiles.addItem(Instructions);
KernelFiles.addCommand("sudo");
KernelFiles.addCmdText("sudo", "Password:");
MoreKernelFiles.addCommand("grep");
KernelFiles.ev.addListener("tryEnterSudo", function() {
    KernelFiles.addCommand("IHTFP");
    KernelFiles.addCmdText("IHTFP", "You have correctly entered the password. You are now in Paradise. \
Take a look around, and congratulations.");
});
KernelFiles.ev.addListener("sudoComplete", function() {
    state.applyState("sudoComplete");
});

//PARADISE (end game screen)
var Paradise = new Room("Paradise", "You have truly found Paradise with the sudo password. \
Congratulations.", "loc_theend.gif");
Paradise.addCmdText("ls", "There's really nothing interesting in Paradise.");

//CAVE
//Room beforeCave = new Room("CaveOfDisgruntledTrolls", "A patch of thorny brambles is growing at the mouth of the cave, blocking your way.", "loc_cave");
var CaveOfDisgruntledTrolls = new Room("CaveOfDisgruntledTrolls",
    "The cave is dark and smells like... feet? Oh, right, it's probably the trolls. \
There's a scared-looking kid in a cage by the far wall.",
    "loc_cave.gif");
var UglyTroll = new Item("UglyTroll",
    "He looks mad, and really ugly.",
    "item_troll1.gif");
UglyTroll.addCmdText("rm",
    "The troll looks briefy surprised, then vanishes with an unpleasant squelching sound.");
UglyTroll.addValidCmd("rm");
UglyTroll.addValidCmd("mv");
UglyTroll.addCmdText("mv", "The troll looks briefly surprised, then moves away. He's mostly \
    harmless anyway.")
UglyTroll.addValidCmd("cp");
UglyTroll.addCmdText("cp", "They're multiplying!");
CaveOfDisgruntledTrolls.addItem(UglyTroll);
//beforeCave.addItem(uglyTroll);
var UglierTroll = new Item("UglierTroll", "He looks mad, and really, really ugly. \
But he wants to tell you something. Between his \
garbled grunts, you manage to understand the following: \
You can cast spells on items that you don't currently see. For example, if you want \
to copy an item from this room to the OminousLookingPath from which you came, you can \
cp [ITEM_TO_COPY] ../[NEW_ITEM_NAME]. You can do this for most spells and most rooms. \
Use this knowledge wisely. Remember.... you can't undo an 'rm' spell.",
    "item_troll2.gif");
UglierTroll.addValidCmd("rm");
UglierTroll.addCmdText("rm",
    "The troll looks briefy surprised, then vanishes with an unpleasant squelching sound.");
CaveOfDisgruntledTrolls.addItem(UglierTroll);
//beforeCave.addItem(uglierTroll);
/*hideousTroll = new MoveableItem("AbsolutelyHideousTroll", "You probably don't want to look at this guy. Oops, too late. \n", "item_supertroll");
hideousTroll.setRMText("The troll belches spectacularly, and you could swear he actually smirks. \n" +
		"You won't get rid of him that easily, not without admin privileges.\n");
hideousTroll.setMVText("If you move him out of the cave, he'll terrorize \n" +
		"the countryside. Also he will probably eat you. \n");*/
var HideousTroll = new Item("AbsolutelyHideousTroll",
    "You probably don't want to look at this guy. Oops, too late.",
    "item_supertroll.gif");
HideousTroll.addCmdText("rm",
    "The troll belches spectacularly, and you could swear he actually smirks. \
You won't get rid of him that easily, not without the 'sudo password'. It's not \
'pseudo', it's 'sudo'. You'll find that in KernelFiles. But first you have to \
get past the UglyTroll to the Slide.");
HideousTroll.addCmdText("mv",
    "If you move him out of the cave, he'll terrorize \
the countryside. Also he will probably eat you.");
CaveOfDisgruntledTrolls.addItem(HideousTroll);
//beforeCave.addItem(hideousTroll);
CaveOfDisgruntledTrolls.addCommand("rm");
CaveOfDisgruntledTrolls.addCommand("mv");
CaveOfDisgruntledTrolls.addCommand("cp");
CaveOfDisgruntledTrolls.ev.addListener("openSlide", function() {
    state.applyState("openSlide");
});

//CAGE
var Cage = new Room("Cage",
    "There's a scared-looking kid in there.",
    "item_cage.gif");
var KidnappedChild = new Item("KidnappedChild",
    "You know it's kind of mean, but you can't help but think that that is one \
funny-looking kid.",
    "item_cagedboy.gif");
Cage.removeCommand("cd");
Cage.addCmdText("cd", "You can’t squeeze through the bars. Anyway, are you crazy? \
    Why would you want to go into a cage?");
KidnappedChild.addCmdText("mv",
    "The kid looks around, dazed, surprised to find himself out of the cage. \
You smile at him and speak in a gentle voice. 'You should probably be getting home, \
little boy. Someone is there waiting for you.' \
'I'm a girl,' says the little girl smartly. Then she dashes past you, out of the cave, and \
runs up the ominous path towards home.");
Cage.addItem(KidnappedChild);

//Athena cluster
var AthenaCluster = new Room("AthenaCluster", "None shall pass without the combination. You \
have one chance to enter the combination. Enter password:",
    "loc_cluster.gif");
var Workstation = new Item("Workstation", "The Workstation has resources you can use to \
access files in a joint Athena locker. It adds new rooms (when they're in your Home we \
call them lockers) to your Home, and you can \
add them to your collection of lockers if you have permission. If you know what you want to add \
to your Home (the name of the locker you want, of course), just 'add LOCKERNAME'. It \
gives you extra spells (if you learn them), and gives you more Rooms to explore.",
    "item_workstation.gif")
AthenaCluster.addItem(Workstation);
AthenaCluster.removeCommand("ls");
AthenaCluster.addCmdText("ls", "You must enter the Athena cluster combo first.");
AthenaCluster.removeCommand("cd");
AthenaCluster.addCmdText("cd", "None shall pass without the combination. You\
have one chance to enter the combination. Enter password:")
AthenaCluster.ev.addListener("AthenaClusterExited", function() {
    AthenaCluster.removeCommand("cd");
});
AthenaCluster.addCommand("tellme");
AthenaCluster.addCommand("add");
var add_locker_func = function() {
    state.applyState("addMagicLocker");
};
AthenaCluster.ev.addListener("addMagicLocker", add_locker_func);

//MIT
var MIT = new Room("MIT", "You have arrived by magic carpet to MIT!", "loc_MIT.gif");
var AdmissionLetter = new Item("AdmissionLetter", "Congratulations on entering MIT! \
Here you will learn special spells that you can only use at MIT. Enjoy!", "item_manuscript.gif")
MIT.addItem(AdmissionLetter);
MIT.ev.addListener("tryEnterAthenaCluster", function() {
    MIT.addCommand("terminus");
    MIT.addCmdText("terminus", "You have correctly entered the cluster combo. Entering the AthenaCluster.");
    AthenaCluster.removeCommand("ls");
    AthenaCluster.addCmdText("ls", "You must enter the Athena cluster combo first.");
    // AthenaCluster.removeCommand("cd");
    // AthenaCluster.addCmdText("cd", "None shall pass without the combination. You\
    // have one chance to enter the combination. Enter password:");
});
MIT.ev.addListener("AthenaComboEntered", function() {
    state.applyState("AthenaComboEntered");
});
MIT.addCommand("tellme");
MIT.addCommand("add");
MIT.ev.addListener("addMagicLocker", add_locker_func);

//StataCenter
var StataCenter = new Room("StataCenter",
    "The center of computer science and artificial intelligence research at MIT. Lots of \
magic happens here, including TAs, grad students, etc.",
    "loc_stata.gif");
var WaryEyeOfGradStudent = new Item("WaryEyeOfGradStudent", "If you so desire, you can add \
a new MagicLocker outside your Home. In this MagicLocker you can find some tools that \
will be useful in your time at MIT (and beyond). There you can find portals to \
other places, you can write notes, and you can store various items you collect in \
your travels in the MagicLocker. But first you need to go to the AthenaCluster and \
learn how.",
    "item_grad.gif");
StataCenter.addItem(WaryEyeOfGradStudent);
var HelpfulTA = new Item("HelpfulTA", "Ah, welcome to the wonderful land of Stata. \
There's one room here that you'll need the combination for. All you have to do is ask:\n \
'tellme combo'.",
    "item_TA.gif");
StataCenter.addItem(HelpfulTA);
StataCenter.addCommand("tellme");
StataCenter.addCommand("add");
StataCenter.ev.addListener("addMagicLocker", add_locker_func);

//Magic locker
var MagicLocker = new Room("MagicLocker", "This contains items and spells that can be used \
anywhere in the world after you add the locker. More is coming.", "item_locker.gif");
var MoreComing = new Item("MoreComing", "The MagicLocker contains Items that can be \
used (and spells that can be used) anywhere else in the game once you add \
the locker. MIT is making updates to the locker at all times, so check back \
frequently.", "item_comingsoon.gif");
MagicLocker.addItem(MoreComing);

/**
 * LINKS BETWEEN ROOMS
 * Fulfill parent/child relationships between rooms
 *
 * API: link(parentRoom, childRoom) 
 */
function link_rooms(parentRoom, childRoom) { if (!(childRoom in parentRoom.children)) { parentRoom.addChild(childRoom); } if (!(parentRoom in childRoom.parents)) { childRoom.addParent(parentRoom); } };


// TheAwakening LINKS
link_rooms(Home, TheAwakening);
link_rooms(TheAwakening, theDesolation);
link_rooms(theDesolation, theCottage);
link_rooms(theTrial, theAwakening);
link_rooms(theTrial, theDesolation);
link_rooms(theAwakening, theTrial);
link_rooms(theDesolation, theAwakening);
link_rooms(theCottage, theTrial);
link_rooms(theCottage, theDesolation);
link_rooms(theDesolation, theTrial);
link_rooms(theTrial, theCottage);
link_rooms(theCottage, theAwakening);
link_rooms(theAwakening, theCottage);


//TheAwakening -> The Trial     
link_rooms(Portal, TownSquare);

//The Trial LINKS
link_rooms(TownSquare, Marketplace);
link_rooms(TownSquare, Library);
link_rooms(TownSquare, RockyPath);
link_rooms(TownSquare, ArtisanShop);
link_rooms(TownSquare, BrokenBridge);
//link(library, backRoom); 
// link_rooms(RockyPath, Farm);
link_rooms(BrokenBridge, Clearing);
link_rooms(Clearing, OminousLookingPath);
// link_rooms(OminousLookingPath, CaveOfDisgruntledTrolls) ;
link_rooms(CaveOfDisgruntledTrolls, Cage);
link_rooms(Slide, KernelFiles);
link_rooms(CaveOfDisgruntledTrolls, Slide);
link_rooms(KernelFiles, MoreKernelFiles);

//MIT level links
link_rooms(Home, MIT);
link_rooms(MIT, StataCenter);
link_rooms(MIT, AthenaCluster);