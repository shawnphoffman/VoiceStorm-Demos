var Leaderboard = React.createClass({
    getInitialState: function() {
        console.log("getInitialState");
        
        return { data: []};
    },
    loadLeaderboard: function() {
        console.log("Loading the Leaderboard...");

        var entries = [
            { Rank: 1, Name: "Shawn Hoffman", Score: 1000 },
            { Rank: 2, Name: "Madison Sites", Score: 900  },
            { Rank: 3, Name: "Harvey Dents",  Score: 800  },
            { Rank: 4, Name: "Eevee Bees",    Score: 500  },
            { Rank: 5, Name: "Dr. Baymax",    Score: 200  }
        ];

        // retrieve the leaderboard from the API
        this.setState({data: entries});

        console.log("Leaderboard loaded with...", this.props);
    },
    componentDidMount: function(){
        console.log("componentDidMount");

        this.loadLeaderboard();
        // refresh on an interval??
    },
    render: function() {
        console.log("Leaderboard.render");
        
        return (
            <div className='leaderboard'>
                <h1>Sample Leaderboard</h1>                
                <LeaderboardList data={this.state.data} />
                <RefreshButton />
            </div>
        );
    }
});

var LeaderboardList = React.createClass({
    render: function(){
        console.log("LeaderboardList.render");
        
        var entries = this.props.data.map(function(entry) {
            console.log("LeaderboardList.map", entry);        
            return (
                <LeaderboardEntry key={entry.Rank} rank={entry.Rank} name={entry.Name} score={entry.Score} />
            );
        });
        return (
            <div className='leaderboardList'>                
                <div className='leaderboardEntries'>
                    <div className='leaderboardHeaders'>
                        <div className='rank'>Rank</div>
                        <div className='name'>Name</div>
                        <div className='score'>Score</div>
                    </div>
                    {entries}
                </div>
            </div>
        );
    }
});

var LeaderboardEntry = React.createClass({
    render: function(){
        console.log("LeaderboardEntry.render");
        
        return (
            <div className='leaderboardEntry'>
                <div className='rank'>{this.props.rank}</div>
                <div className='name'>{this.props.name}</div>
                <div className='score'>{this.props.score}</div>
            </div>
        );
    }
});

var RefreshButton = React.createClass({
    render() {
        return (
            <a className="refresh btn btn-large btn-primary" href="#" >Refresh</a>
        );
    }
});

ReactDOM.render(
    <Leaderboard />,
    document.getElementById('container')
);