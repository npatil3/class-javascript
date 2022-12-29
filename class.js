class form{

    constructor(name)
    {
        this.name = name;
    }

    submit()
    {
      alert(`${this.name} your form is submited`);
    }

    pending()
    {
      alert(`${this.name} you form is on pending`)
    }

    cancel()
    {
      alert(`${this.name} your form is canceled`);
    }
    
}

let nikhil = new form("nikhil");

let saksham = new form ("saksham");


nikhil.pending();

nikhil.submit();

saksham.pending();

saksham.cancel();

