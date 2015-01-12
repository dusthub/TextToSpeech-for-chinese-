# coding=utf-8
from flask import Flask, render_template, request, jsonify
import jieba
app = Flask(__name__)


EXAMPLE = "在文本框中输入需要进行截词的文本,系统将会返回截词后文本、截词后的语音合成."
"""
常量,作为截词的示例文本
"""


def cut(to_cut=EXAMPLE):
    """
    对文本进行截词操作,这里文本格式为string类型
    :param to_cut:
    :return:
    """
    seg_list = jieba.cut(to_cut)
    seg = list(seg_list)
    dust_seg = ''

    for value in seg:
        dust_seg = dust_seg + value.encode('utf-8') + '   '

    return dust_seg[0:-2]


@app.route('/api/cut', methods=['GET', 'POST'])
def ajax_post_text():
    to_cut = request.form.get('text')
    # return jsonify(resp={'cut': to_cut})
    return cut(to_cut)


@app.route('/api/speech', methods=['POST'])
def ajax_post_cut():
    r = request.form.get('r')
    f = request.form.get('f')
    tts_cut = request.form.get('tts_cut')
    return render_template('seg.html', r=r, f=f, src=tts_cut is None and EXAMPLE or tts_cut)


@app.route('/')
def index():
    """
    默认处理方法
    :return:
    """
    return render_template('seg.html', cut=cut(EXAMPLE), src=cut(EXAMPLE))


if __name__ == '__main__':
    app.run(debug=True)
