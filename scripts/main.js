import { world, system } from "@minecraft/server";

world.beforeEvents.chatSend.subscribe((data) => {
    const player = data.sender;
    const message = data.message.toLowerCase();

    if (message === "/wallclimb on") {
        system.run(() => {
            player.addTag("climb_enabled");
            player.sendMessage("§b[Ability] §aWall Climb: ENABLED");
        });
        data.cancel = true;
    }

    if (message === "/wallclimb off") {
        system.run(() => {
            player.removeTag("climb_enabled");
            player.sendMessage("§b[Ability] §cWall Climb: DISABLED");
        });
        data.cancel = true;
    }
});
                             
