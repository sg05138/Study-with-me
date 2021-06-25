using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class OnCollision_Show : MonoBehaviour
{
    public string targetObjectName;
    public string showObjectName;
    GameObject showObject;

    // Start is called before the first frame update
    void Start()
    {
        showObject = GameObject.Find(showObjectName);
        showObject.SetActive(false);
    }

    // Update is called once per frame
    void OnCollisionEnter2D(Collision2D collision)
    {
        if(collision.gameObject.name == targetObjectName)
        {
            showObject.SetActive(true);
        }
    }
}
