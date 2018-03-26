import React, {Component} from 'react';


import $ from 'jquery';

class New extends Component{

    constructor(){
        super();
        this.viewer = new BpmnJS();
        this.generateId = 'bpmnContainer'+ Date.now();
    }

    render(){
        return (
            <div>
                <div id={this.generateId}>

                </div>
                <button id={"save-button"}>Save</button>
            </div>
        );

    }

    componentDidMount (){

        this.viewer.attachTo('#'+ this.generateId);
        $('#'+ this.generateId).css({"height": "700px"} );

        // import function
        function importXML(xml,Viewer) {

            // import diagram
            Viewer.importXML(xml, function(err) {

                if (err) {
                    return console.error('could not import BPMN 2.0 diagram', err);
                }

                var canvas = Viewer.get('canvas'),
                    overlays = Viewer.get('overlays');


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

        function exportDiagram(viewer) {
            viewer.saveXML({ format: true }, function(err, xml) {
                if (err) {
                    return console.error('could not save BPMN 2.0 diagram', err);
                }
                alert('Diagram exported. Check the developer tools!');
                console.log('DIAGRAM', xml);
                $.ajax({
                    type: "POST",
                    url: "/new",
                    data: xml,
                    contentType: "text/xml",
                    datatype: "xml",
                    error: function() { alert("No data found."); },
                    success: function(res) {

                    }
                });
            });
        }


        let diagramUrl = 'https://cdn.rawgit.com/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn';
        let viewer = this.viewer;


        $.get( diagramUrl, function( data ) {
            importXML(data, viewer);
        });


        $('#save-button').click(function () {
            exportDiagram(viewer);
        });

    }
}
export default New;