from flask import Flask, render_template, url_for, request, jsonify
from text_sentiment_prediction import *

app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')
 
@app.route('/predict-emotion', methods=['POST'])
def predict_emotion():

    # Get Input Text from POST Request
    input_text=request.json.get('text')
    
    if not input_text:
        # Response to send if the input_text is undefined
        return({
            'message':'please your text',
            'status':'error'
        })
    else:
        p_emotionss,p_image=predict(input_text)
        return({
            'datas':{
                'p-emotions':p_emotionss,
                'p-image':p_image
            },
            'status':'success'
        })
           
        # Response to send if the input_text is not undefined
        
        # Send Response         
        
       
app.run(debug=True)



    