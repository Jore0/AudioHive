import React, {Component} from 'react';

class DropDown extends Component {
    constructor(props){
        debugger
        super(props)
        this.state = {
            vis: false,
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ vis: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }


  closeMenu() {
      if (!this.dropdownMenu.contains(event.target)){
          this.setState({ vis: false }, () => {
            document.removeEventListener('click', this.closeMenu);
          });
      }
  }

    render(){
        return (
            <div>
                <button onClick={this.showMenu}> <i className="fas fa-ellipsis-h"></i></button>
                {
                    this.state.vis 
                    ? (
                        <div className="menu" ref={(element)=> {this.dropdownMenu = element}}>
                            <button className="orange-button" onClick={this.props.logout}>Log Out</button>
                            <button>Menu item 2</button>
                            <button>Menu item 3</button>
                        </div>
                        )
                    : (null)
                }
            </div>
        );
    }
}

export default DropDown;