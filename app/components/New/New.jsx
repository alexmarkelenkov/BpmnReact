import React, {Component} from 'react';
import { Grid } from 'react-bootstrap';
import BpmnJS from 'bpmn-js';
import $ from 'jquery';

class New extends Component{

    constructor(){
        super();
        this.viewer = new BpmnJS();
        this.generateId = 'bpmnContainer'+ Date.now();
    }


    render(){
        return(
          <Grid>
            <div id={this.generateId}></div>
          </Grid>
        );
    }

    componentDidMount (){

        this.viewer.attachTo('#'+ this.generateId);

        // import xml
        let diagramUrl = 'https://cdn.rawgit.com/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn';
        $.get(diagramUrl, openDiagram, 'text').bind(this);


        function openDiagram(bpmnXML) {
            // import diagram
            this.viewer.importXML(bpmnXML, function(err) {
                if (err) {
                    return console.error('could not import BPMN 2.0 diagram', err);
                }
                // access modeler components
                var canvas = this.viewer.get('canvas');
                var overlays = this.viewer.get('overlays');
                // zoom to fit full viewport
                canvas.zoom('fit-viewport');
                // attach an overlay to a node
                overlays.add('SCAN_OK', 'note', {
                    position: {
                        bottom: 0,
                        right: 0
                    },
                    html: '<div class="diagram-note">Mixed up the labels?</div>'
                });
                // add marker
                canvas.addMarker('SCAN_OK', 'needs-discussion');
            });
        }

    }
}
export default New;