let menu =
{
    showing: false,
    abrir: function()
    {
        if(this.showing==false)
        {
            this.showing=true;
            document.querySelector("aside").style.right="0";
        }
        else
        {
            this.showing=false;
            document.querySelector("aside").style.right="-45vw";
        }
    }
}