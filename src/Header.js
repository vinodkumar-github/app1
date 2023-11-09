const HeaderStyle =  {
    'background-color': 'royalblue',
    'backgroundcolor': 'royalblue',
    'color': 'white',
    'padding': '1px',
    'font-family':  'BlinkMacSystemFont , ariel',
    'fontfamily':  'BlinkMacSystemFont , ariel'
}
const h1Style =  {
   
    'padding': '0px 0px 0px 5px',
    
}

function Header() {
    return (
      <div className="Header" style={HeaderStyle}>
        <h1 style={h1Style}>Groceries</h1>
      </div>
    );
  }
  
  export default Header;
  