export const fetchSongs = () =>(
    $.ajax({
        method: "GET", 
        url: "/api/songs"
    })
)

export const fetchSong =(id) => (
    $.ajax ({
        method: "GET", 
        url: `/api/songs/${id}`
    })
)

export const uploadSong = (formData) =>(
    $.ajax({
        method: "POST",
        url: `/api/songs`, 
        data: formData, 
        contentType: false, 
        processData: false
    })
)
export const updateSong = (song) =>(
    $.ajax({
        method: "PATCH",
        url: `/api/songs/${song.id}`, 
        data: song,
        contentType: false,
        processData: false
    })
)
export const deleteSong = (id) =>(
    $.ajax({
        method: "DELETE",
        url: `/api/songs/${id}`
    })
)