function logout() {
    localStorage.removeItem("loggedInUser");
    alert("ログアウトします");
    window.location.href = "index.html";
}