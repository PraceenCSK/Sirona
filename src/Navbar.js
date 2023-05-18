function Navbar() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"> <img className="sirona" src="https://files.thesirona.com/site-images/original/253x72.png" alt="" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Shop All</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Period Care</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Hair Removal</a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" href="#">Personal Safety</a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" href="#">Kits</a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" href="#">Blog</a>
              </li>

            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
