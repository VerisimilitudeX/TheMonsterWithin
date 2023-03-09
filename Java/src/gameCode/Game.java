package gameCode;

import java.util.ArrayList;

import javax.swing.Icon;
import javax.swing.ImageIcon;

public class Game {
	// private HashSet<Room> rooms;
	private Room currentRoom;
	private Item currentItem;
	private ImageIcon currentIcon;
	private Room dankRoom;
	private Room tunnel;
	private Room Library;
	private Room BackRoom;
	public Room RockyPath;
	public Item Boulder;
	private Room ArtisanShop;
	public Room Clearing;
	private Room BrokenBridge;
	private Item Librarian;
	private Room Cage;
	public Room Farm;
	public Room CaveOfTrolls;
	public Item HideousTroll;
	public Item UglyTroll;
	public Item UglierTroll;
	private Item Farmer;
	private Item Artisan;
	private ArrayList<String> spellsLearned = new ArrayList<String>();
	private boolean libquestcomplete = false;
	private boolean rockinpath = true;
	// private boolean madeAllGears = false;
	private int numGearsMade = 0;
	public String gearName;
	private int cornCounter = 0;
	private Item CryingMan;
	private Item KidnappedChild;
	public Room OminousPath;
	public Item ThornyBrambles;
	public boolean bridgesolved = false;
	private boolean Housequestcomplete = false;
	public boolean bramblessolved = false;
	private boolean awaitingPassword = false;
	public boolean troll1gone = false;
	public boolean troll2gone = false;

	public Game() {
		String introText = "Welcome! If you are new to the game, here are some tips: \n " +
				"Look at your surroundings with the command \"ls\". \n " +
				"Move to a new location with the command \"cd Location/Activity\" \n" +
				"You can backtrack with the command \"cd ..\". \n" +
				"Interact with things in the world with the command \"less ITEM\" \n" +
				"Go ahead, explore. We hope you enjoy what you find. Do cd or ls as your first command.\n"  +
    "Did you know that you can press tab to autocomplete commands, just like a real Linux Terminal? \n";
		// this.rooms = new HashSet<Room>();

		// HOME
		Room Home = new Room("Home", introText + "\n", "titlescreen");

		this.currentIcon = new ImageIcon("graphic/" + Home.getIconText() + ".gif");
		this.currentRoom = Home;

		// ---------TheAwakening----------------------
		Room TheAwakening = new Room("TheAwakening", "Clink CLink- You have Awaken!" + "\n" +
				"Welcome to the Awakening! \n" +
				"You wake up and look at your creator. \n" +
				"Time to learn how humans act!\n" +
				"Enter the Desolation to learn how humans act.\n", "loc_awake.png");
		// Learn how humans act( The desolation)
		Room TheDesolation = new Room("TheDesolation",
				"You have succesfuly obtained the required knowledge to learn how humans act \n" +
						"Enter the Cottage to learn how humans read.\n" +
						"Enter the Trial to learn how humans judge.\n",
				"loc_desolation.png");

		TheDesolation.addItem(new Item("gloves", "You have collected gloves!",
				"You have used the gloves to strangle William- your creator's brother!  ",
				"You have killed William! ",
				"item_gloves.png"));

		TheDesolation.addItem(new Item("knife", "Are you sure this is the correct item to use? ",
				"knife.png"));

		// Learn how humans read( The cottage)
		Room TheCottage = new Room("TheCottage", "You have fleed to the Cottage.",
				"Which items are used in the Cottage? ",
				"loc_cottage.png");
		TheCottage.addItem(new Item("book", "You have used the book to learn how to read succesfuly. ",
				"You have learned how to read!", "item_book.png"));
		TheCottage.addItem(new Item("headphones", "You have used the headphones to listen to music.",
				"You have listened to music but they have not helped you learn how to read!",
				"Lyrics to the song: [Verse 1]" +
				"\nI don't know what they've been told" +
				"But I'm a creature made of mold" +
				"I'm hiding out in this old shack" +
				"No need to fear their attack" +
				
				"\nI'm stepping out into the snow" +
				"I see a family that I know" +
				"They look so happy and so kind" +
				"But they can't see what's on my mind" +
				
				"\n[Chorus]" +
				"But I ain't worried 'bout it right now (right now)" +
				"Finding peace and love, 1823, heroes" +
				"I ain't worried 'bout it right now (right now)" +
				"Sharing bread and books, learning how to look below" +
				"I ain't worried 'bout it" +
				"I ain't worried 'bout it (Hey)" +
				
				"\n[Verse 2]" +
				"I don't know what they've been told" +
				"But I'm a gentle soul with gold" +
				"I'm living like I've found a home" +
				"Got no regrets even when I'm alone, yeah" +
				
				"I'm at my best when I've got something I'm wanting to give" +
				"Way too busy for them problems and problems to live, yeah, yeah" +
				"No stressing, just confessing with gratitude and thrill" +
				"I'll take it in and let it show" +
				
				"\n[Chorus]" +
				"But I ain't worried 'bout it right now (right now)" +
				"Finding peace and love, 1823, heroes" +
				"I ain't worried 'bout it right now (right now)" +
				"Sharing bread and books, learning how to look below" +
				"I ain't worried 'bout it " +
				"I ain't worried 'bout it (Hey)" +
				
				"\n[Bridge]" +
				"Ooh, ooh " +
				"I ain't worried" +
				"Ooh, ooh " +
				"Oh, no, no " +
				
				"\n[Chorus]" +
				"But I ain't worried 'bout it right now (right now)" +
				"Finding peace and love, 1823, heroes " +
				"I ain't worried 'bout it right now (right now) " +
				"Sharing bread and books, learning how to look below " +
				"I ain't worried 'bout it (woo ooh) " +
				"(Hey) " +
				"I ain't worried 'bout it (woo ooh) " +
				"(Hey) " +
				"I ain't worried 'bout it", "item_headphones.png"));

		TheCottage.addItem(new Item("friendliness_potion",
				"You used the friendliness_potion to attempt to make friends with the family in the cottage.",
				"You have been recieved with extreme hate and beatings!", "item_potion.png"));
		// The Trial of Justine
		Room TheTrial = new Room("TheTrial", "You have been transported to the Trial. ",
				"Which item will you use to hide in the corner?", "loc_trial.png");

		TheTrial.addItem(new Item("cloak", "You have used the cloak to hide in the corner succesfuly.",
				"Justine has been convicted and she will expire later. ", "item_cloak.png"));

		TheTrial.addItem(new Item("cape", "Hmmm, Are you sure this is the correct item?",
				"Use less and the correct item to complete the objective and try again. ", "item_cape.png"));

		// TheFinalPlea
		Room TheFinalPlea = new Room("TheFinalPlea",
				"Your final plea is for a wife similar to you who will love you. Which map will you choose to use?",
				"loc_finalplea.png");

		TheFinalPlea
				.addItem(new Item("SouthAmerica", "You have used the South America map to plan ahead for your wife.",
						"item_southamerica.png"));

		TheFinalPlea.addItem(new Item("Antarctica",
				"You have used the Antarctica map to plan ahead for your wife. However, you release Antarctica is way too cold even though it is far from current humanity.",
				"item_Antarctica.png"));

		TheFinalPlea.addItem(new Item("Africa",
				"You have used the Africa map to plan ahead for your wife. However, you release Africa is way too hot even though it is far from current humanity.",
				"item_africa.png"));

		TheFinalPlea.addItem(new Item("Europe",
				"You have used the Europe map to plan ahead for your wife. However, you release Europe is too close to your current civilization.",
				"item_europe.png"));
		// PORTAL (to bring you to the next level)

		// TheBrokenPromise
		Room TheBrokenPromise = new Room("TheBrokenPromise",
				"Your creator has broken his promise. He has killed your wife that was nearly finished, crushing your hopes and dreams while wasting the time you spent planning. You leave him saying 'I shall be with you on your wedding night!' ",
				"loc_brokenpromise.png");

		TheBrokenPromise.addItem(new Item("pullupbar",
				"You have used the pullupbar to improve your grip strength and become stronger.",
				"item_pullupbar.png"));
		TheBrokenPromise.addItem(new Item("dumbell",
				"You have used the dumbell get jacked muscles and big hands.",
				"item_dumbell.png"));

		// TheWedding
		Room TheWedding = new Room("TheWedding",
				"You have arrived to your creator's wedding. However, he is on the lookout for you. You can only choose one item as otherwise he will catch you and you will be unsuccesful in killing Elizabeth. Which item will you choose?",
				"loc_wedding.png");

		TheWedding.addItem(new Item("binoculars",
				"You use the binoculars to look for Elizabeth in the vicinity. You have been unsuccesful in killing Elizabeth. However, you if you quickly grab the key card you will still have a chance.",
				"item_binoculars.png"));

		TheWedding.addItem(new Item("keycard",
				"You have used the keycard to enter the hotel in which Elizabeth is residing. You have been succesful in killing Elizabeth. You have killed Elizabeth!",
				"item_keycard.png"));
		Room Portal = new Room("Portal", "You have been transported through time...\n", "item_Portal");

		//  TheAlps
		Room TheAlps = new Room("TheAlps","After chocking Elizabeth to death you are one step closer to your revenge. You have been transported to the chilly Alps. You on top of a mountain plotting your final step for revenge. You have been given a choice of two items. Which item will you choose?",
		"loc_alps.png");
	
		TheAlps.addItem(new Item("skis",
		"You have used the skis to ski down the mountain. When you reach the bottom you pick reach the entrance of a hotel named TheEnd. Enter the hotel to complete the game.",
		"item_skis.png"));
	
		TheAlps.addItem(new Item("snowshoes",
		"You have used the snow shoes to attempt to go down the mountain. However, you realise that you are not skilled enough to walk down the steep mountain with your bodyweight. You must find another way.",
		"item_snowshoes.png"));
	
		//TheEnd 
		Room TheEnd = new Room("TheEnd", "You have entered the hotel named TheEnd. You hear from a romanticist couple that you have completed the game. They hand you a newspaper.",
			"loc_end.png");
		
		TheEnd.addItem(new Item("newspaper",
			"You have used the newspaper to read the news. You have been informed that you have completed the game as your creator has killed himself due to grief and misery, you realize you have caused nothing to anyone except pain and suffering. You realize you are satanic and a source of evil. With these thoughts in mind, you decide this is the right time for the end of your life, too. You choke yourself to death.",
			"item_newspaper.png"));
		// END OF GAME  

		link(Home, TheAwakening);
		link(TheAwakening, TheDesolation);
		link(TheAwakening, TheTrial);
		link(TheAwakening, TheCottage);
		link(TheDesolation, TheCottage);
		link(TheCottage, TheTrial);
		link(TheTrial, TheFinalPlea);
		link(TheFinalPlea, TheBrokenPromise);
		link(TheBrokenPromise, TheWedding);
		link(TheWedding, TheAlps);
		link(TheAlps, TheEnd);
		link(TheDesolation, TheAwakening);
		link(TheDesolation, TheTrial);
		link(TheCottage, TheTrial);
		link(TheCottage, TheDesolation);
		link(TheCottage, TheAwakening);
		// ---------------TheAwakening-----------------

		// ---------------The Trial---------------------
		// TOWN SQUARE
		Room TownSquare = new Room("TownSquare", "You are in a sunny and spacious town square. \n" +
				"There is a pedestal at the center of the cobblestone turnabout, but no statue on it. \n" +
				"The architecture is charming, but everyone here seems nervous for some reason.\n", "loc_square");
		TownSquare.addItem(new Item("RandomCitizen1", "\"Excuse me,\" you begin. The man turns, startled. \n" +
				"\"Oh, hello! Welcome to The Monster Within. You'll have to forgive me, but we're all a little \n" +
				"on edge lately, what with the Dark Wizard spreading corruption all along the \n" +
				"coast.  You should be careful!\" \n", "item_citizen1"));
		TownSquare.addItem(new Item("RandomCitizen2",
				"The man looks up from his newspaper when he notices you staring. \n" +
						"\"Have you read this?\" he exclaims, shaking the latest edition of \"The Last \n" +
						"Word\" in your face. \"It says here the wizard's corruption has spread as far\n" +
						"as Oston to the south, and New Console is completely unrecoverable! These are \n" +
						"dangerous times,\" he mutters, shaking his head and turning back to his reading. \n",
				"item_citizen2"));
		TownSquare.addItem(new Item("DistraughtLady", "The woman is sobbing uncontrollably, her face in her hands.\n" +
				"\"My baby,\" she cries, \"They kidnapped my baby! I just know that wizard had \n" +
				"something to do with it.\"\n", "item_lady"));

		// MARKETPLACE
		Room Marketplace = new Room("Marketplace", "You are in the Marketplace.\n", "loc_market");
		Item Vendor = new Item("Vendor", "\" 'Ello there.\" The Vendor smiles at you unpleasantly, \n" +
				"revealing a mouth full of gold teeth. \"Well? Wot are you looking for?\"\n", "item_merchant");
		Vendor.setRMText("\"Ha! That spell doesn't work on everything, you know. I may have forgotten \n" +
				"to mention that before I sold it to you...\"\n");
		Marketplace.addItem(Vendor);
		YNItem Backpack = new YNItem("Backpack",
				"There's a beat-up looking Backpack on the table with no price tag.  Its cloth looks \n" +
						"frayed, but sturdy. You glance quickly at the Vendor, but his attention is elsewhere. \n" +
						"Do you take the Backpack? y\\n \n",
				"item_Backpack", "You quickly snatch the Backpack from the table. This could come in handy.\n" +
						"From now on, you can put items into your Backpack.\n",
				"You decide to leave the Backpack where it is for now.\n");
		Marketplace.addItem(Backpack);
		YNItem rmSpell = new YNItem("rmSpell", "There's a spell scroll on the table labeled \"Remove.\" \n" +
				"Do you want to buy it for 15 gold pieces? y/n \n", "item_manuscript",
				"The Vendor snatches the gold from your hand and then hands you the scroll,\n" +
						"leering as he does so. \"Ah, yes, the rm spell,\" he muses. \"Simply say \"rm\" followed by the name of an item or person, \n"
						+
						"and they will disappear from this plane... forever. D'you have the guts to use it, I wonder?\"\n"
						+
						"You can now use the \"rm\" spell.\n",
				"Come back later.\n");
		Marketplace.addItem(rmSpell);
		YNItem mkdirSpell = new YNItem("mkdirSpell",
				"There's a spell scroll on the table labeled \"Make dreams into reality.\" \n" +
						"Do you want to buy it for 30 gold pieces? y\\n \n",
				"item_manuscript", "The Vendor cackles. \"An ambitious one, eh? Very well. \n" +
						"Just say \"mkdir\" followed by any name that pleases you, and you can create a new place \n" +
						"that never existed there before. Ha! Not very useful, if y'ask me...\"\n" +
						"You can now use the \"mkdir\" spell.\n",
				"You leave the mkdirSpell on the table\n");
		Marketplace.addItem(mkdirSpell);

		// LIBRARY
		Library = new Room("Library", "The Library is dimly lit and smells like mildew. \n" +
				"Still, it's warm in here and the soft green carpet makes it seem kind of cozy.\n", "loc_Library");
		Library.addItem(new Item("TotallyRadSpellbook",
				"Legends speak of a great word of power that allows the speaker to perform \n" +
						"any action on any item. \"Sudo\", as the ancients called it, conveys complete mastery over the elements. \n"
						+
						"Unfortunately, or perhaps fortunately, the mystical password has been lost \n" +
						"to the sands of time.\n",
				"item_radspellbook"));
		Library.addItem(new Item("PaperbackRomance", "You flip the paperback open to a random page. \n" +
				"\"Oh, Horatio!\" Antonia exclaimed, her bosom heaving as Horatio deftly ripped the \n" +
				"bodice from her lithe frame. Horatio gave an animalistic growl and he clasped her \n" +
				"fingers in his strong hands and brought them to rest upon his swollen� You close the \n" +
				"book, disinterested, and place it back on the shelf. \n", "item_romancenovel"));
		Library.addItem(new GrepItem("HistoryOfTerminus", "It looks like an interesting book, but it's way too \n" +
				"long and the print is too tiny.\n", "item_historybook", "DarkWizard",
				"...old tales tell of a dark wizard who will fragment the land...\n" +
						"...only the world-maker can stop the dark wizard's virus from...\n" +
						"...that the power of \"sudo\" may be the dark wizard's only weakness...\n"));
		Library.addItem(new Item("InconspicuousLever",
				"You spot an inconspicuous lever behind the shelves.  Curious, you pull it, \n" +
						"and a panel slides open to reveal a secret back room.\n",
				"item_lever"));
		Library.addCommand("grep");

		// BACK ROOM
		BackRoom = new Room("BackRoom", "You find a mysterious back room. You find a Librarian \n" +
				"alone with a small elf. You hope you're not interrupting.", "loc_backroom");
		BackRoom.addItem(new Item("Grep", "The exceptionally ugly elf turns to you with a sour expression. \n" +
				"\"Greeeeeep,\" he says sullenly.\n", "grep"));
		Librarian = new Item("Librarian", "\"Hm? Oh, hello. I apologize for the mess, but I'm very busy \n" +
				"doing research on the dark wizard. Would you do me a favor? Go look up all \n" +
				"references to DarkWizard in the History of Terminus. My assistant Grep \n" +
				"can help you.\" \n" +
				"Grep eyes you balefully. \"Greeepp.\" \"To search the contents of the book, just type \n" +
				"\"grep PHRASE DOCUMENT\", where PHRASE is the phrase you want to search for,\n" +
				"and DOCUMENT is the name of the book you want to search.\"\n", "item_Librarian");
		BackRoom.addItem(Librarian);
		BackRoom.addCommand("grep");

		// ROCKY PATH
		RockyPath = new Room("RockyPath", "The weed-choked path leads off into the fields. \n" +
				"There is an enormous Boulder blocking your way, however.\n", "loc_rockypath");
		Boulder = new Item("LargeBoulder", "It's much too big to move. \n", "item_Boulder");
		Boulder.setRMText("The Boulder disappears with a pop. The way is clear now.\n");
		Boulder.setRM(true);
		RockyPath.addItem(Boulder);
		RockyPath.addCommand("rm");

		// ARTISAN'S SHOP
		ArtisanShop = new Room("ArtisanShop", "The walls of the shop are covered in clocks, \n" +
				"all slightly out of sync. At the workbench, a woman in an enormous pair of goggles \n" +
				"is wielding a blowtorch with frightening enthusiasm.\n", "loc_Artisanshop");
		Item StrangeTrinket = new Item("StrangeTrinket", "It looks like a crystal of some sort.  It's very beautiful.",
				"item_trinket");
		StrangeTrinket.setRMText("Didn't your mother ever teach you that it's rude to rease other people's \n" +
				"things from their plane of existence?\n");
		StrangeTrinket.setMVText("You can't take that, it's not yours!\n");
		ArtisanShop.addItem(StrangeTrinket);
		Item ClockworkDragon = new Item("ClockworkDragon",
				"A dragon the size of a small dog is frolicking about the room. \n" +
						"You'd think it was real if it weren't for the wind-up key sticking out of its \n" +
						"back.",
				"item_clockdragon");
		ClockworkDragon.setRMText("Didn't your mother ever teach you that it's rude to erase other people's \n" +
				"things from their plane of existence?\n");
		ClockworkDragon.setMVText("You can't take that, it's not yours!\n");
		ArtisanShop.addItem(ClockworkDragon);
		Artisan = new Item("Artisan", "The Artisan lifts up her goggles and peers at you in " +
				"surprise. \"Are you the new assistant? You're late! ...  \n You say you aren't my assistant? \n" +
				"Well, that doesn't mean you can't make yourself useful. I need some gears, quickly! \n" +
				"... \n" +
				"You don't even know how to make things? Hmph. Some assistant you are. Just \n" +
				"say \"touch ITEM\" alright? Where ITEM is the name of the thing you want to create. \n" +
				"Now make me a Gear! Then come back.\"\n", "item_Artisan");
		ArtisanShop.addItem(Artisan);
		ArtisanShop.addCommand("touch");

		// FARM
		Farm = new Room("Farm", "There was once a Farm of some sort here, but now the fields are scorched and \n" +
				"brown.\n", "loc_Farm");
		Item EarOfCorn = new Item("EarOfCorn", "The corn is sad and withered-looking.\n", "item_corn");
		EarOfCorn.setRMText("rm: Why would you destroy a starving man's only food?\n");
		Farm.addItem(EarOfCorn);
		Farmer = new Item("Farmer", "\"Ruined! I'm ruined! Look at these crops... almost nothing \n" +
				"left! The wizard's minions were here last week... they destroyed everything. How \n" +
				"will I feed my 10 children with just one ear of corn? Can you help me? \" \n", "");
		Farm.addItem(Farmer);
		Farm.addCommand("cp");

		// BROKEN BRIDGE
		BrokenBridge = new Room("BrokenBridge",
				"A creaky wooden bridges stretches across a chasm. But it's missing a \n" +
						"Plank, and the gap is too far to jump. \n",
				"loc_bridge");
		// beforeClearing = new Room("Clearing", "You can't cross the bridge until
		// you've replaced the missing Plank.", "");
		BrokenBridge.addCommand("touch");

		// CLEARING
		Clearing = new Room("Clearing", "There's a small grassy Clearing here, with a man sitting on a \n" +
				"stone and sobbing. Behind him is a pile of rubble. \n", "loc_Clearing");
		CryingMan = new Item("CryingMan", "\"You! You're a magic-user! I can tell, you've got that look. \n" +
				"Come to finish the job, have you? Well, go ahead, do your worst there's nothing else you \n" +
				"can take from me. Not since the rest of you were here a few days ago.\"\n" +
				" \n" +
				"\"What happened? You DARE to ask-- you know perfectly well what happened.\n" +
				"Your friends, the wizard's minions, destroyed my House and kidnapped my poor \n" +
				"daughter, that's what! My wife even went into town to look for help, and I haven't \n" +
				"heard from her since!\"\n" +
				" \n" +
				"\"Hm? Well, I guess it's true that you don't look like one of the wizard's minions. Still, \n" +
				"I don't trust you magicfolk. If you really are who you say you are, then prove your \n" +
				"good intentions by making me a new House!\" \n", "item_man");
		Clearing.addItem(CryingMan);
		House = new Room("House", "You made this House for the man. How thoughtful of you!", "");

		// OMINOUS-LOOKING PATH
		OminousPath = new Room("OminousLookingPath",
				"The path leads toward a dark cave. It's an ordinary cobblestone path, but for \n" +
						"some reason it fills you with a sense of dread.\n",
				"loc_path");
		ThornyBrambles = new Item("ThornyBrambles",
				"This thicket of brambles is covered with wicked-looking thorns. You \n" +
						"can't go around it, and you definitely aren't about to go through it.\n",
				"");
		ThornyBrambles.setMVText("You can't touch them because they are covered with thorns. Ouch!\n");
		ThornyBrambles.setRMText("You speak the words of the Remove spell and the brambles glimmer a \n" +
				"deep blue. The sparks rearrange themselves into a prompt: 'PASSWORD?' \n");
		OminousPath.addItem(ThornyBrambles);
		OminousPath.addCommand("rm");

		// CAVE
		// Room beforeCave = new Room("CaveOfDisgruntledTrolls", "A patch of thorny
		// brambles is growing at the mouth of the cave, blocking your way.",
		// "loc_cave");
		CaveOfTrolls = new Room("CaveOfDisgruntledTrolls",
				"The cave is dark and smells like... feet? Oh, right, it's probably the trolls. \n" +
						"There's a scared-looking kid in a Cage by the far wall.\n",
				"loc_cave");
		UglyTroll = new Item("UglyTroll", "He looks mad, and really ugly.\n", "item_troll1");
		UglyTroll.setRMText("The troll looks briefy surprised, then vanishes with an unpleasant squelching sound.\n");
		CaveOfTrolls.addItem(UglyTroll);
		// beforeCave.addItem(UglyTroll);
		UglierTroll = new Item("UglierTroll", "He looks mad, and really, really ugly.\n", "item_troll2");
		UglierTroll.setRMText("The troll looks briefy surprised, then vanishes with an unpleasant \n" +
				"squelching sound.\n");
		CaveOfTrolls.addItem(UglierTroll);
		// beforeCave.addItem(UglierTroll);
		/*
		 * HideousTroll = new MoveableItem("AbsolutelyHideousTroll",
		 * "You probably don't want to look at this guy. Oops, too late. \n",
		 * "item_supertroll");
		 * HideousTroll.
		 * setRMText("The troll belches spectacularly, and you could swear he actually smirks. \n"
		 * +
		 * "You won't get rid of him that easily, not without admin privileges.\n");
		 * HideousTroll.setMVText("If you move him out of the cave, he'll terrorize \n"
		 * +
		 * "the countryside. Also he will probably eat you. \n");
		 */
		HideousTroll = new Item("AbsolutelyHideousTroll",
				"You probably don't want to look at this guy. Oops, too late. \n", "item_supertroll");
		HideousTroll.setRMText("The troll belches spectacularly, and you could swear he actually smirks. \n" +
				"You won't get rid of him that easily, not without admin privileges.\n");
		HideousTroll.setMVText("If you move him out of the cave, he'll terrorize \n" +
				"the countryside. Also he will probably eat you. \n");
		CaveOfTrolls.addItem(HideousTroll);
		// beforeCave.addItem(HideousTroll);
		CaveOfTrolls.addCommand("rm");
		CaveOfTrolls.addCommand("mv");

		// CAGE
		Cage = new Room("Cage", "There's a scared-looking kid in there.\n", "item_Cage");
		KidnappedChild = new Item("KidnappedChild",
				"You know it's kind of mean, but you can't help but think that that is one \n" +
						"funny-looking kid.\n",
				"item_Cagedboy");
		KidnappedChild.setMVText("The kid looks around, dazed, surprised to find himself out of the Cage. \n" +
				"You smile at him and speak in a gentle voice. 'You should probably be getting Home, \n" +
				"little boy. Someone is there waiting for you.' \n" +
				"'I'm a girl,' says the little girl smartly. Then she dashes past you, out of the cave, and \n" +
				"runs up the ominous path towards Home.\n");
		Cage.addItem(KidnappedChild);

		// link level 2 together
		link(TownSquare, Marketplace);
		link(TownSquare, Library);
		link(TownSquare, RockyPath);
		link(TownSquare, ArtisanShop);
		link(TownSquare, BrokenBridge);
		// link(Library, BackRoom);
		link(RockyPath, Farm);
		link(BrokenBridge, Clearing);
		link(Clearing, OminousPath);
		link(OminousPath, CaveOfTrolls);
		link(CaveOfTrolls, Cage);
		link(PracticeRoom, box);

		// link level 1 to level 2
		link(Portal, TownSquare);

		// ---------------END LEVEL 2-----------------

		this.currentRoom = Home;
	}

	private void link(Room parent, Room child) {
		if (!(parent.getChildren().contains(child)))
			parent.addChild(child);
		child.setParent(parent);
	}

	public ArrayList<MoveableItem> getMoveableItems() {
		ArrayList<MoveableItem> mov = new ArrayList<MoveableItem>();
		for (Item i : this.getCurrentLessItems()) {
			if (i instanceof MoveableItem) {
				mov.add((MoveableItem) i);
			}
		}
		return mov;
	}

	/*
	 * public Game(ArrayList<Room> rooms){
	 * this.rooms = new HashSet<Room>(rooms);
	 * }
	 */

	public boolean changeRoom(String roomName) {
		for (Room r : this.currentRoom.getChildren()) {
			if (r.getName().equals(roomName)) {
				this.currentRoom = r;
				return true;
			}
		}
		return false;
	}

	public ArrayList<String> getLocationNames() {
		ArrayList<String> activities = new ArrayList<String>();
		for (Room r : this.currentRoom.getChildren())
			activities.add(r.getName());
		return activities;
	}

	public ArrayList<String> getItemNames() {
		ArrayList<String> items = new ArrayList<String>();
		for (Item i : this.currentRoom.getItems())
			items.add(i.getName());
		return items;
	}

	public ArrayList<String> getCurrentLSList() {
		ArrayList<String> lsList = new ArrayList<String>();
		lsList.add("Activities:");
		lsList.addAll(getLocationNames());
		lsList.add("Items:");
		lsList.addAll(getItemNames());
		return lsList;
	}

	public ArrayList<Room> getCurrentCDRooms() {
		return this.currentRoom.getChildren();
	}

	public ArrayList<? extends Item> getCurrentLessItems() {
		return this.currentRoom.getItems();
	}

	public String getCurrentText() {
		return this.currentRoom.getText();
	}

	public Room getCurrentRoom() {
		return this.currentRoom;
	}

	public void changeRoom(Room r) {
		this.currentRoom = r;
		this.currentIcon = new ImageIcon("graphic/" + r.getIconText() + ".gif");
	}

	public ArrayList<Box> getBoxes() {
		ArrayList<Box> boxes = new ArrayList<Box>();
		for (Room r : this.currentRoom.getChildren()) {
			if (r instanceof Box)
				boxes.add((Box) r);
		}
		return boxes;
	}

	public void resetAllBoxes() {
		for (Box b : getBoxes())
			b.resetItems();
	}

	public void move(MoveableItem itemToMove, Room box) {
		box.addItem(itemToMove);
		this.currentRoom.removeItem(itemToMove);
	}

	public void linkDankRoomToTunnel() {
		link(dankRoom, tunnel);
	}

	public void linkLibraryToBackRoom() {
		link(Library, BackRoom);
	}

	public Icon getCurrentIcon() {
		return this.currentIcon;
	}

	public void setIcon(String imgName) {
		this.currentIcon = new ImageIcon("graphics/" + imgName + ".gif");
	}

	public Item getCurrentItem() {
		return this.currentItem;
	}

	public void setCurrentItem(Item i) {
		this.currentItem = i;
	}

	public void unlink() {
		dankRoom.removeChild(tunnel);
		tunnel.removeParent(dankRoom);
		Library.removeChild(BackRoom);
		BackRoom.removeParent(Library);
	}

	/*
	 * public void linkClearingAndHouse(){
	 * link(afterClearing, House);
	 * }
	 */

	public void libQuestCompleted() {
		libquestcomplete = true;
	}

	public boolean isLibQuestFinished() {
		return libquestcomplete;
	}

	public void setLibrarianPostQuestText() {
		Librarian.setText(
				"\"Thank you, you've been most helpful! Here, take this for your troubles. It's the least I can do.\" The Librarian hands you five gold pieces.");
	}

	public boolean isRockInPath() {
		return rockinpath;
	}

	public void rockMovedFromPath() {
		rockinpath = false;
	}

	public void setRockyPathText() {
		RockyPath.setText("The weed-choked path leads off into the Farm fields.");
		// link(getRockyPath(), Farm);
	}

	public void addGearToArtisanShop(String name) {
		ArtisanShop.addItem(new Item(name, "You made this gear.", "item_manuscript"));
	}

	public void setArtisanText(int num) {
		if (num == 1) {
			Artisan.setText("\"Well that's lovely, thank you, but you can't expect me to make \n" +
					"anything with just one gear! Can't you copy it? \n" +
					"... \n" +
					"*sigh* I can see you are going to need a lot of training. Just say \"cp ITEM \n" +
					"NEWITEM\". ITEM's the name of the item that you want copy, and NEWITEM is the \n" +
					"new name of the copy, got it? Then poof! You'll have shiny new item. I need five \n" +
					"more gears so you'd better get started! Come back when you've made all five. \n");
		} else if (num == 2) {
			Artisan.setText("\"Ha, finished already? I guess you learn fast. Well, thanks for \n" +
					"your assistance. Take this.\" The Artisan hands you some gold pieces.");
			ArtisanShop.removeCommand("touch");
			ArtisanShop.addCommand("cp");
		} else if (num == 3) {
			Artisan.setText("\"I need more gears!\"");
		}

	}

	public int numGearsMade() {
		return this.numGearsMade;
	}

	public void incrementNumGears() {
		this.numGearsMade++;
	}

	public boolean hasLearned(String spell) {
		return spellsLearned.contains(spell);
	}

	public void learnSpell(String spell) {
		spellsLearned.add(spell);
	}

	public void setNewFarmerText(String txt) {
		Farmer.setText(txt);
	}

	public void incrementCornCounter() {
		cornCounter++;
	}

	public int getCornCounter() {
		return cornCounter;
	}

	/*
	 * public void setRockyPath(Room RockyPath) {
	 * this.RockyPath = RockyPath;
	 * }
	 * 
	 * public Room getRockyPath() {
	 * return RockyPath;
	 * }
	 */

	/*
	 * public void switchClearings(){
	 * link(BrokenBridge, afterClearing);
	 * BrokenBridge.setText("A creaky rope bridges stretches across a chasm.\n");
	 * BrokenBridge.removeChild(beforeClearing);
	 * //beforeClearing.removeParent(BrokenBridge);
	 * }
	 */

	public void fixBridge() {
		bridgesolved = true;
		BrokenBridge.setText("A creaky rope bridges stretches across a chasm.\n");
	}

	/*
	 * public void makeHouseComplete(){
	 * Clearing.
	 * setText("There's a small grassy Clearing here, with a man sitting on a stone and \n"
	 * +
	 * "sobbing. Behind him is a small white House.\n");
	 * }
	 */

	public void setTrollText(boolean Cage) {
		if (Cage) {
			HideousTroll.setMVText("The troll vanishes with a pop and reappears \n" +
					"inside of the Cage. He scowls and then begins to chew on the kidnapped \n" +
					"child's leg. \n");
		} else {
			HideousTroll.setMVText(
					"The troll vanishes with a pop and reappears inside of the Cage. He scowls and roars.\n");
		}
	}

	public void completeHouseQuest(Room House) {
		Housequestcomplete = true;
		link(Clearing, House);
		Clearing.setText("There's a small grassy Clearing here, with a man sitting on a stone and " +
				"sobbing. Behind him is a small white House.\n");
		CryingMan.setText("\"Maybe you aren't so bad after all. If you really want " +
				"to help, though, you'll go save my daughter! They took her that way, down that " +
				"ominous-looking path. I heard one of them mutter the word 'brambles_b_gone' as " +
				"they were leaving. It doesn't mean anything to me, but maybe it will help you on " +
				"your journey.\" \n ");
	}

	public boolean HouseQuestComplete() {
		return Housequestcomplete;
	}

	/*
	 * public Room getAfterClearing() {
	 * return afterClearing;
	 * }
	 */

	/*
	 * public void setOminousPath(Room OminousPath) {
	 * this.OminousPath = OminousPath;
	 * }
	 * 
	 * public Room getOminousPath() {
	 * return OminousPath;
	 * }
	 */

	/*
	 * public void setThornyBrambles(Item thornyBrambles) {
	 * this.thornyBrambles = thornyBrambles;
	 * }
	 * 
	 * public Item getThornyBrambles() {
	 * return thornyBrambles;
	 * }
	 */

	public void setAwaitingPassword(boolean awaitingPassword) {
		this.awaitingPassword = awaitingPassword;
	}

	public boolean isAwaitingPassword() {
		return awaitingPassword;
	}

	public void setBramblessolved(boolean bramblessolved) {
		this.bramblessolved = bramblessolved;
	}

	public boolean isBramblessolved() {
		return bramblessolved;
	}

	public void moveTroll() {
		CaveOfTrolls.removeItem(HideousTroll);
		Cage.addItem(HideousTroll);
	}

	public void moveKid() {
		Cage.removeItem(KidnappedChild);
		Clearing.addItem(KidnappedChild);
		KidnappedChild.setText("I am so glad to be away from those stinky trolls!");
		KidnappedChild.setIconName("item_boy");
		CryingMan.setText("Oh, thank goodness she's safe!");
		Clearing.setText("A man and his daughter are frolicking in front of a lovely House.");
	}

}
