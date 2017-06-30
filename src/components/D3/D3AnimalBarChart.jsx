import React from 'react';


class D3AnimalBarChart extends React.Component{
  constructor(props){
    super(props);

    this.defaultConfig = {
      graphSize: {
        width: "100%",
        height: "100%",
      }
    };

    this.load = this.load.bind(this);
    this.error = this.error.bind(this);
  }
  
  /* callback for successful load */
  load(response){
    //double check d3 object is avaliable
    if(typeof(d3) === 'object'){
      //load the d3 bar chart 
      this.loadBarChart(this.props.data);
    }else{
      console.log(
        'd3.js script loaded, but unable to find d3 object'
      );
    }
  }

  error(response){
    console.log("unable to load d3.js script");
  }

  /* wait until component did mount to ensure 'barChart' ref is available */
  componentDidMount(){
    //check if d3 is already loaded, if not build and load d3.js script
    if( !(typeof(d3)==='object') ){
      //create script element
      const d3_script = document.createElement('script');

      //add script attributes
      d3_script.onload = (response) => (this.load(response));
      d3_script.onerror = (response) => (this.error(response));
      d3_script.src = "https://d3js.org/d3.v4.min.js";
      
      //load script directly on to DOM
      document.body.appendChild(d3_script);
    }else{
      this.loadBarChart(this.props.data);
    }
  }

  componentWillUnmount(){
    //remove three.js event listeners
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.data !== this.props.data && this.svg != null){
      this.svg.selectAll('.bar').remove();
      this.svg.selectAll('g').remove();
      this.loadBarChart(this.props.data);
    }
  }

  loadBarChart(data){
    const dimen = this.refs.barChart.parentNode.getBoundingClientRect();

    this.svg = d3.select(this.refs.barChart);
    var margin = {top: 20, right: 20, bottom: 45, left: 20};
    var width = dimen.width - margin.left - margin.right;
    var height = dimen.height - margin.top - margin.bottom;
    
    var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
        y = d3.scaleLinear().rangeRound([height, 0]);

    var g = this.svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


      x.domain(data.map(row => (row['animal'])));
      y.domain([0, d3.max(data, function(row) { return row.age; })]);

      g.append("g")
          .attr("class", "axis axis--x")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));

      g.append("g")
          .attr("class", "axis axis--y")
          .call(d3.axisLeft(y).ticks(3));
      g.append("text")
        .attr("class", "y label")
        .attr("dy", "-0.75em")
        .attr("text-anchor", "end")
        .text("Age");

      g.selectAll(".bar")
        .data(data)
        .enter().append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return x(d.animal); })
          .attr("y", function(d) { return y(d.age); })
          .attr("width", x.bandwidth())
          .attr("height", function(d) { return height - y(d.age); });
  }

  render(){
    return ( 
      <svg 
        style={this.props.graphSize ? this.props.graphSize : this.defaultConfig.graphSize} 
        ref='barChart'>
        d3 bar chart
      </svg> 
    );
  }
}

export default D3AnimalBarChart ;


