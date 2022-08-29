window.onload = function(){
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const entry = fragment.get('entry');

    if(entry != null){
        store.collection("entries").where("path", "==", entry)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    document.body.innerHTML = `${doc.data().content}`;
            });
        })
    }
}
