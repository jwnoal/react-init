import React from 'react'
import { NavBar, Icon, SegmentedControl, WingBlank,List,
   InputItem, DatePicker,Radio, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const RadioItem = Radio.RadioItem;
class Antmobile extends React.PureComponent{
	constructor(props) {
		super(props)
		this.state = {
      type: 'money',
      date: now,
      value: 0
		}
  }
  onChange = (value) => {
    console.log(this.state.value);
    this.setState({
      value,
    });
  };
	render(){
    const { value} = this.state;
    const { getFieldProps } = this.props.form;
    const { type } = this.state;
    const data = [
      { value: 0, label: 'doctor' },
      { value: 1, label: 'bachelor' },
    ];
		return (
			<div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >NavBar</NavBar>
        <WingBlank size="lg" className="sc-example">
        <SegmentedControl values={['Segment1', 'Segment2']} />
        </WingBlank>
        <List>
          <InputItem
            {...getFieldProps('money')}
            type={type}
            placeholder="start from left"
            clear
            moneyKeyboardAlign="left"
          >光标在左</InputItem>
          <InputItem
            type={type}
            placeholder="start from right"
            clear
            onChange={(v) => { console.log('onChange', v); }}
            onBlur={(v) => { console.log('onBlur', v); }}
          >光标在右</InputItem>
          <InputItem
            {...getFieldProps('money2', {
              normalize: (v, prev) => {
                if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
                  if (v === '.') {
                    return '0.';
                  }
                  return prev;
                }
                return v;
              },
            })}
            type={type}
            placeholder="money format"
            ref={el => this.customFocusInst = el}
            clear
          >数字键盘</InputItem>
          <List.Item>
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={() => this.customFocusInst.focus()}
            >
              click to focus
            </div>
          </List.Item>
          <InputItem
            {...getFieldProps('autofocus')}
            clear
            placeholder="auto focus"
            ref={el => this.autoFocusInst = el}
          >标题</InputItem>
          <InputItem
            {...getFieldProps('focus')}
            clear
            placeholder="click the button below to focus"
            ref={el => this.customFocusInst = el}
          >标题</InputItem>
          <List.Item>
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={this.handleClick}
            >
              click to focus
            </div>
          </List.Item>
          <DatePicker
          mode="date"
          title="Select Date"
          extra="Optional"
          value={this.state.date}
          onChange={date => this.setState({ date })}
        >
          <List.Item arrow="horizontal">Date</List.Item>
        </DatePicker>
        </List>
        <WhiteSpace size="lg" />
        <List renderHeader={() => 'RadioItem demo'}>
        {data.map(i => (
          <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
            {i.label}
          </RadioItem>
        ))}
      </List>
			</div>
		)
	}
}

export default createForm()(Antmobile)

