function appendButton() {
    const url = window.location.href
    console.log(url);
    array = url.split("/");
    console.log(array[4]);
    const button = `<a id="lootTracker" class="btnv6_blue_hoverfade btn_medium" href="http://127.0.0.1:3000/addGame/${array[4]}" style="margin: 5px;"><span>Add to LootTracker</span></a>`
    $("#category_block").append(button);
}


appendButton();