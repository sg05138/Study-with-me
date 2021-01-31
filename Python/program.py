from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys

import os
import time
import pyperclip


def paste_input(elm,input_text,driver):
    pyperclip.copy(input_text)
    elm.click()
    ActionChains(driver).key_down(Keys.CONTROL).send_keys('v').key_up(Keys.CONTROL).perform()


# 현재 경로 불러오기
now_path = os.path.dirname(os.path.realpath(__file__))
driver_path = f"{now_path}\\chromedriver.exe"
print(now_path)
print(driver_path)

# Selenium 실행시키기
driver = webdriver.Chrome(driver_path)
driver.get("https://www.naver.com")

# # 로그인 버튼 눌러서 로그인 페이지로 이동하기
# go_to_login_btn = driver.find_element_by_xpath('//*[@id="account"]/a')
# go_to_login_btn.click()

# # 로그인 하기
# id_input = driver.find_element_by_xpath('//*[@id="id"]')

# user_id = ''
# paste_input(elm=id_input, input_text=user_id, driver=driver )
# time.sleep(1)

# pw_input = driver.find_element_by_xpath('//*[@id="pw"]')
# user_pw = ''
# paste_input(elm=pw_input, input_text=user_pw, driver=driver )
# time.sleep(1)

# login_btn = driver.find_element_by_xpath('//*[@id="log.login"]')
# login_btn.click()

# 검색하기
search_input = driver.find_element_by_xpath('//*[@id="query"]')
paste_input(elm=search_input, input_text='새해복많이받으세요', driver=driver )

search_btn = driver.find_element_by_xpath('//*[@id="search_btn"]')
search_btn.click()

# View Tab 이동
driver.find_element_by_xpath('//*[@id="lnb"]/div[1]/div/ul/li[4]').click()

# Blog 게시물 불러오기
wrapper = driver.find_elements_by_class_name('_more_contents_event_base')[0]
item_list = wrapper.find_elements_by_class_name('_svp_item')
print(f"{len(item_list)}개 의 POST가 있습니다")

for item in item_list:
    title_elm = item.find_elements_by_class_name('total_tit')[0]
    print(title_elm.text)

time.sleep(100)
