const battle = (player, enemy)=> {
    if (player === enemy) {
        return 'Even';
        }
    if (player === 'spock' && enemy === 'lizard' || player === 'spock' && enemy === 'paper') {
            return 'You Lost';
        }
    if (player === 'spock' && enemy === 'rock' || player === 'spock' && enemy === 'scissors' ) {
            return 'You win';
        }
    if (player === 'lizard' && enemy === 'spock' || player === 'lizard' && enemy === 'paper') {
            return 'You win';
        }
        if (player === 'lizard' && enemy === 'rock' || player === 'lizard' && enemy === 'scissors') {
            return 'You Lost';
        }
        if (player === 'paper' && enemy === 'spock' || player === 'paper' && enemy === 'rock') {
            return 'You win';
        }
        if (player === 'paper' && enemy === 'lizard' || player === 'paper' && enemy === 'scissors') {
            return 'You win';
        }
        if (player === 'rock' && enemy === 'spock' || player === 'rock' && enemy === 'paper') {
            return 'You Lost';
        }
        if (player === 'rock' && enemy === 'lizard' || player === 'rock' && enemy === 'scissors') {
            return 'You win';
        }
        if (player === 'scissors' && enemy === 'spock' || player === 'scissors' && enemy === 'rock') {
            return 'You Lost';
        }
        if (player === 'scissors' && enemy === 'lizard' || player === 'scissors' && enemy === 'paper') {
            return 'You win';
        }
    
    }

export default battle;