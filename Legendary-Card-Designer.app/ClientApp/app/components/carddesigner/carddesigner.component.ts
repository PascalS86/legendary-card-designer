import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'carddesigner',
    templateUrl: './carddesigner.component.html',
    styleUrls: ['./carddesigner.component.css']
})
export class CardDesignerComponent {
    // public height: number=1110;
    // public width: number=816;
    public card_types: string[] = ["Tech", "Strength", "Instinct", "Covert", "Ranged"];
    public teams: string[] = ["Avengers", "Cabal", "Iluminati", "MavelKnights", "Shield", "SpiderFriends", "X-Force", "X-Men"]
    public card_options: string[] = ["Hero", "TopCard", "Villain", "MasterMind"];
    public card_porperties: string[] = ["None", "Attack", "Recruit", "Recruit and Attack"]
    public selected_type: string = "";
    public selected_team: string = "";
    public selected_card_option: string = "";
    public selected_card_property: string = "";
    public card_title:string="Captain Marvel";
    public card_sub_title:string="Captain Marvel";
    public villain_team:string= "";
    public card_variant:number=0;
    public villain_victory_points:number=0;
    public attack_points:number=0;
    public recruiting_points:number=0;
    public card_text:string="";
    public card_image:string = "";

    get selected_card(): string{
        return "./images/"+ (this.selected_card_option == "Hero"? this.selected_type: this.selected_card_option)
        + (this.selected_card_property != "None" && (this.selected_card_option == "Hero" || this.selected_card_option == "TopCard") ? this.selected_card_property.replace(" and ", "And" ): "")
        + ".png";
    }
}
