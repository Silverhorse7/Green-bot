import { Command } from "../../abstract/QuickCommand";;export default class Vibbrato extends Command {
get name(){return"vibrato"}get description(){return"Enables/disables the vibrato filter"}get category(){return"Filters"}get checks(){return{voice:true,dispatcher:true,channel:true,premium:true}}async run({ctx:e}){return e.dispatcher.player.filters.vibrato?(e.dispatcher.player.setVibrato(),e.successMessage("⏱ Disabling the `Vibrato` filter to the current song...")):(e.dispatcher.player.setVibrato({frequency:4,depth:.75}),e.successMessage("⏱ Enabling the `Vibrato` filter to the current song..."))}}