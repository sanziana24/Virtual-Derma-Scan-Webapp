import {Component, OnInit} from '@angular/core';
import {SkinGuideDisease} from "../../models/skin-guide-disease";
import {MatDialog} from "@angular/material/dialog";
import {SkinDiseaseDetailsComponent} from "../skin-disease-details/skin-disease-details.component";
import {Router} from "@angular/router";

@Component({
    selector: 'app-skin-guide',
    templateUrl: './skin-guide.component.html',
    styleUrls: ['./skin-guide.component.css']
})
export class SkinGuideComponent implements OnInit {

    //create an array with 24 diseases

    skinDiseases: SkinGuideDisease[] = [
        {
            "diseaseName": "Acne",
            "diseaseImage": "/assets/images/disease/acne.jpeg",
            "description" : "Acne occurs due to inflammation and blockage around the hair follicles and oil glands in the skin. The inflammation may lead to pus formation around the hair follicles, and ultimately a rupture of the follicles. This in turn stimulates the wound healing process, which eventually ends in scar formation.",
            "symptoms" : ["Whiteheads (closed plugged pores)", "Blackheads (open plugged pores)", "Small red, tender bumps (papules)", "Pimples (pustules), which are papules with pus at their tips", "Large, solid, painful lumps under the skin (nodules)", "Painful, pus-filled lumps under the skin (cystic lesions)"],
            "treatments": ["Chemical peels", "Dermabrasion", "Laser resurfacing", "Subscision", "Dermal fillers", "TCA CROSS"]
        },
        {
            "diseaseName": "Actinic Keratosis",
            "diseaseImage": "/assets/images/disease/actinic-keratosis.jpeg",
            "description": "Actinic keratoses (also called solar keratoses) are dry scaly patches of skin that have been damaged by the sun. The patches are not usually serious. But there's a small chance they could become skin cancer, so it's important to avoid further damage to your skin.",
            "symptoms": ["Rough, dry or scaly patch of skin", "Flat to slightly raised patch or bump on the top layer of skin", "In some cases, a hard, wartlike surface", "Color variations, including pink, red or brown", "Itching, burning, bleeding or crusting"],
            "treatments": ["Photodynamic therapy", "Laser therapy", "Scraping (curettage)", "Freezing (cryotherapy)"]
        },
        {
            "diseaseName": "Bullous",
            "diseaseImage": "/assets/images/disease/bullous.webp",
            "description": "Bullous pemphigoid is a rare skin condition that mainly affects older people. It usually starts with an itchy, raised rash. As the condition develops, large blisters can form on the skin. It may last a few years and sometimes causes serious problems, but treatment can help manage the condition in most cases.",
            "symptoms": ["Itching skin, weeks or months before blisters form", "Large blisters that don't easily rupture when touched, often along creases or folds in the skin", "Skin around the blisters that is normal, reddish or darker than normal", "Eczema or a hive-like rash", "Small blisters or sores in the mouth or other mucous membranes (benign mucous membrane pemphigoid)"],
            "treatments": ["Corticosteroids", "Steroid-sparing drugs", "Other drugs that fight inflammation"]

        },
        {
            "diseaseName": "Contact Dermatitis",
            "diseaseImage": "/assets/images/disease/dermatitis.jpeg",
            "description": "Contact dermatitis is an itchy rash caused by direct contact with a substance or an allergic reaction to it. The rash isn't contagious, but it can be very uncomfortable",
            "symptoms": ["An itchy rash", "Leathery patches that are darker than usual (hyperpigmented), typically on brown or Black skin", "Dry, cracked, scaly skin, typically on white skin", "Bumps and blisters, sometimes with oozing and crusting", "Swelling, burning or tenderness"],
            "treatments": ["Steroid creams or ointments", "Pills"]

        },
        {
            "diseaseName": "Cellulitis",
            "diseaseImage": "/assets/images/disease/cellulitis.png",
            "description": "Cellulitis is a common, potentially serious bacterial skin infection. The affected skin is swollen and inflamed and is typically painful and warm to the touch. Cellulitis usually affects the lower legs, but it can occur on the face, arms and other areas. The infection happens when a break in the skin allows bacteria to enter.",
            "symptoms": ["An irritated area of skin that tends to expand", "Swelling", "Tenderness", "Pain", "Skin dimpling"],
            "treatments": ["Medication", "Treatment in the hospital"]
        },
        {
            "diseaseName": "Drug Eruptions",
            "diseaseImage": "/assets/images/disease/drug-eruptions.jpeg",
            "description": "A drug rash (drug eruption), also known as a drug reaction, is a skin condition caused by a medication. A drug rash can appear in many forms, and any medication can cause a drug rash",
            "symptoms": ["Skin rash", "Hives", "Itching", "Fever", "Swelling", "Wheezing"],
            "treatments": ["Topical corticosteroids (such as betamethasone cream) are safe in the short term and may reduce symptoms", "Emollients can be applied liberally and frequently", "Drug-induced urticaria often responds to antihistamines, but they are rarely useful for other eruptions"]
        },
        {
            "diseaseName": "Eczema",
            "diseaseImage": "/assets/images/disease/eczema.jpeg",
            "description": "Eczema (also called atopic dermatitis) is a condition that causes your skin to become dry, red, itchy and bumpy. It’s one of many types of dermatitis. Eczema damages the skin barrier function (the \"glue\" of your skin). This loss of barrier function makes your skin more sensitive and more prone to infection and dryness.",
            "symptoms": ["Dry skin", "Itchy skin", "Red rashes", "Bumps on the skin", "Scaly, leathery patches of skin", "Crusting skin", "Swelling"],
            "treatments": ["Creams that control itching and help repair the skin", "Drugs to fight infection", "Oral drugs that control inflammation"]
        },
        {
            "diseaseName": "Exanthems",
            "diseaseImage": "/assets/images/disease/exanthems.webp",
            "description": "Exanthem is the medical name given to a widespread rash that is usually accompanied by systemic symptoms such as fever, malaise and headache. It is usually caused by an infectious condition such as a virus, and represents either a reaction to a toxin produced by the organism, damage to the skin by the organism, or an immune response",
            "symptoms": ["Fever", "Malaise", "Headache", "Loss of appetite", "Abdominal pain", "Irritability", "Muscular aches and pains"],
            "treatments": ["Applying a topical lotion, such as calamine lotion or a topical corticosteroid, to decrease itching", "Taking an oatmeal bath to soothe the skin and reduce itching", "Applying cool compresses to the skin to relieve pain and itching", "Avoiding scratching the rash, as this can increase pain and may lead to a skin infection"]
        },
        {
            "diseaseName": "Hair Loss",
            "diseaseImage": "/assets/images/disease/hair-loss.jpeg",
            "description": "Hair loss (alopecia) can affect just your scalp or your entire body, and it can be temporary or permanent. It can be the result of heredity, hormonal changes, medical conditions or a normal part of aging. Anyone can lose hair on their head, but it's more common in men.",
            "symptoms": ["Gradual thinning on top of head", "Circular or patchy bald spots", "Sudden loosening of hair", "Full-body hair loss", "Patches of scaling that spread over the scalp"],
            "treatments": ["Minoxidil (Rogaine)", "Finasteride (Propecia)", "Hair transplant surgery", "Laser therapy"]
        },
        {
            "diseaseName": "Herpes HSV",
            "diseaseImage": "/assets/images/disease/herpes.jpeg"
        },
        {
            "diseaseName": "Lupus",
            "diseaseImage": "/assets/images/disease/lupus.jpeg"
        },
        {
            "diseaseName": "Melanoma Skin Cancer",
            "diseaseImage": "/assets/images/disease/melanoma.jpeg"
        },
        {
            "diseaseName": "Nail Fungus",
            "diseaseImage": "/assets/images/disease/nail-fungus.webp"
        },
        {
            "diseaseName": "Poison Ivy",
            "diseaseImage": "/assets/images/disease/poison-ivy.jpeg"
        },
        {
            "diseaseName": "Psoriasis",
            "diseaseImage": "/assets/images/disease/psoriasis.jpeg"
        },
        {
            "diseaseName": "Rosacea",
            "diseaseImage": "/assets/images/disease/rosacea.jpeg",
            "description": "Rosacea is a common skin condition that causes blushing or flushing and visible blood vessels in your face. It may also produce small, pus-filled bumps. These signs and symptoms may flare up for weeks to months and then go away for a while. Rosacea can be mistaken for acne, other skin problems or natural ruddiness.",
            "symptoms": ["Facial blushing or flushing", "Visible veins", "Swollen bumps", "Burning sensation", "Eye problems", "Enlarged nose"],
            "treatments": ["Topical drugs that reduce flushing", "Oral antibiotics", "Oral acne drug", "Lasser therapy", "Dermabrasion", "Electrocautery"]
        },
        {
            "diseaseName": "Scabies Lyme",
            "diseaseImage": "/assets/images/disease/scabies-lyme.jpeg"
        },
        {
            "diseaseName": "Seborrheic Keratoses",
            "diseaseImage": "/assets/images/disease/seborrheic-keratoses.webp"
        },
        {
            "diseaseName": "Urticaria Hives",
            "diseaseImage": "/assets/images/disease/urticaria.jpeg"
        },
        {
            "diseaseName": "Vascular Tumors",
            "diseaseImage": "/assets/images/disease/vascular-tumors.jpeg"
        },
        {
            "diseaseName": "Vasculitis",
            "diseaseImage": "/assets/images/disease/vasculitis.jpeg"
        },
        {
            "diseaseName": "Warts Molluscum",
            "diseaseImage": "/assets/images/disease/warts-molluscum.jpg"
        }
    ];

    page: number = 1;
    itemsPerPage: number = 9;
    searchText: any;
    totalLength: number = 22;

    constructor(private matDialog: MatDialog,
                private router: Router) {
    }

    ngOnInit(): void {
    }

    onOpenReadMore(disease: SkinGuideDisease){
        const dialogRef = this.matDialog.open(SkinDiseaseDetailsComponent, {
            data: disease,
            width: '750px',
            height: '750px'
        });
        this.router.events
            .subscribe(() => {
                dialogRef.close();
            });
    }
}
