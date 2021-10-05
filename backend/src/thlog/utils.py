from uuid import uuid4


def gen_pk():
    _uuid = str(uuid4()).split('-')
    return ''.join(_uuid[:3]) + _uuid[4][:2]
